import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({cartItems}) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem item={item.product} id={item.id}/>
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    // height: 300px;
    background-color: #FBFCFC;
    // we decide cartItem to occupate 80% of the space
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
`
const Title = styled.h1`
    margin-bottom:8px;
    
`
const ItemsContainer = styled.div`

`

