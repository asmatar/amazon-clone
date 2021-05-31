import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

function CartItem({id, item}) {

    let options = []
    // we most amount we can buy'll be 20 items, or the number you've selected before in the data base
    for (let i = 1; i <Math.max(item.quantity + 1, 20); i++){
        // when we select the number we push it into 'options'
        options.push( <option value={i}> Qty: {i} </option> )
    }

    const changeQuantity = (newQuantity) => {
        console.log(newQuantity)
        // we update the database with the value of the imput which is newQuantity, the changeQuantity parameter ( event.target.value)
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    const deleteItem = (event) => {
        event.preventDefault();
        //now we delete from the db
        db.collection('cartItems').doc(id).delete();
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} alt="" />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoButtom>
                    <CartItemQuantity>
                        {/* this is a select button */}
                        <select
                        value= {item.quantity}
                        onChange={(event)=> changeQuantity(event.target.value)
                        }
                        >
                            {options} 
                        </select>
                    </CartItemQuantity>
                    <CartItemDelete onClick={deleteItem}>Delete</CartItemDelete>
                </CartItemInfoButtom>

            </CartItemInfo>

            <CartItemPrice>
                ${item.price}
            </CartItemPrice>
            
        </Container>
    )
}

export default CartItem
const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid grey;
`
const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    // the image can't grow up
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
// to push the div as big as possible
    flex-grow:1; 
`
const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`
const CartItemInfoButtom = styled.div`
    display: flex;
    margin-top: 4px;
    align-item: center;
`
const CartItemQuantity = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15,17,17, 0.15);
        
        :focus {
            outline: none;
        }
    }
`
const CartItemDelete = styled.div`
    color #007185;
    margin-left: 16px;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left:16px;
`