import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

function CartTotal({getTotalPrice, getCount}) {

    return (
        <Container>

            <Subtotal>Subtotal ({getCount()} items): 
            <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            {/* {getTotalPrice()} */}
            </Subtotal>
            <CheckoutButton>proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal
const Container = styled.div`
    // height: 200px;
    background-color: #FBFCFC;
    flex: 0.3;
    padding: 20px;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;
`
const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    border: 2px solid #a88734;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #ddb347;
    }
`