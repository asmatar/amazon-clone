import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {

  // loop through all the carttem
  const getTotalPrice = () => {
    //create total which is the value of the total price
    let total = 0;
    
    // for each carItem
    cartItems.forEach((item) => {
      // add the price of the item multiplied byt the quantity
      total += (item.product.price * item.product.quantity)
    });
    return total
    // save it
  }

    return (
        <Container>
          <CartItems cartItems={cartItems}/>
          <CartTotal getTotalPrice={getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`