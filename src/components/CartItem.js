import React from 'react';
import styled from 'styled-components';
function CartItem() {
    return (
        <Container>
            <ImageContainer>
                <img src='https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg' alt="" />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>020 Apple iPad Pro (12,9 Pouces, Wi-FI, 256 Go) - Gris sidéral (4ᵉ génération)</h2>
                </CartItemInfoTop>
                <CartItemInfoButtom>
                    <CartItemQuantity>5</CartItemQuantity>
                    <CartItemDelete>Delete</CartItemDelete>
                </CartItemInfoButtom>

            </CartItemInfo>

            <CartItemPrice>
                $ 1449
            </CartItemPrice>
            
        </Container>
    )
}

export default CartItem
const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
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
const CartItemInfo = styled.div``
const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`
const CartItemInfoButtom = styled.div`
    display: flex;
    margin-top: 4px;
`
const CartItemQuantity = styled.div``
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