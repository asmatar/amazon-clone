
import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function Product({title, price, rating, image, id}) {

    const addToCart = ()=>{
        console.log(id)
        // this'll create a new document from the product we put in
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get().then((doc)=>{
            // console.log(doc)
            // we want to know if the cart exist yet in the collection
            if (doc.exists){
                // if exist we update the data 
                cartItem.update({
                    // increasing the quantity
                    quantity: doc.data().quantity + 1
                })
                // if it does NOT exist we put it in the collection
            } else {
                // creating a news id. the function 'set' is to put in the database
                db.collection('cartItems').doc(id).set({
                    // in 'set' we put the data that we want
                    name: title,
                    image,
                    price,
                    // the quantty is one, because it's the first product
                    quantity :1  
                })
            }
        })
    }
    return (
        <Container>
            <Title> {title} </Title>
            <Price> {price} $</Price>
            <Rating> 
                {
                    Array(rating).fill().map(rating => <p>★ </p> )
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton onClick={addToCart}> add to cart</AddToCartButton> 
            </ActionSection> 
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    max-height: 400px;
    padding: 20px;
    margin: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 250px;
`
const Title = styled.span`
height : 20%;
`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`
    display: flex;
`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddToCartButton = styled.button`
    background-color: #f0c14b;
    width: 100px;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
    cursor: pointer;
`
const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`
