import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({cartItems}) {
    return (
        <>
        <Container>
             <Img src="https://cdn.buyee.jp/sliderbanner/amazon_amazonTopImage/en/1/index_en.png" alt="" />
        
            {/* <Banner /> */}
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem key={item.id} item={item.product} id={item.id}/>
                    ))
                }
            </ItemsContainer>
        </Container>
        </>
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
    /* position: relative; */
    
    `
const Title = styled.h1`
/* margin-top: 20%; */
    margin-bottom:8px;
    
` 
const Img = styled.img`
    object-fit: fill;
    max-height: 300px;
    width: 100%;
`
const ItemsContainer = styled.div`

/* margin-top: 20%; */
`
// const Banner = styled.div`
// position: absolute;
// top:0;
// left: 0;
// width: 100%;
//     background-image: url('https://i.imgur.com/SYHeuYM.jpg');
//     min-height: 450px;
//     // the position of the background
//     background-position: center;
//     // make sure that no matter that big is the windows screen, it'll cover it
//     background-size: cover;
//     // to apply a gradient to the background, the opacity go from 1 to 0 from top to bottom
//     mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
//     z-index: 1;
// `


