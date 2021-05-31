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

  const getCount = () => {
    let count = 0;
    console.log(cartItems)
    //loop through all cart items, and for each one, we'll take the number of quantity and add it
    cartItems.forEach(item => {
        // add the quantity of the cartItem to total
        count += item.product.quantity;
    });
    return count;
}


    return (
        <Container>
          <CartItems cartItems={cartItems}/>
          <CartTotal getTotalPrice={getTotalPrice}
          getCount={getCount}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`