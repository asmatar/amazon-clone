
import React from 'react'
import styled from 'styled-components'

function Product({title, price, rating, image}) {
    return (
        <Container>
            <Title> {title} </Title>
            <Price> {price}</Price>
            <Rating> 
                {
                    Array(rating).fill().map(rating => <p>	★ </p> )
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton> add to cart</AddToCartButton> 
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
`
const Title = styled.span``
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
`
const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`
