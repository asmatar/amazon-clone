import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header({cartItems, user, signOut}) {
// console.log('je suis dans le header', user)
    const getCount = () => {
        let count = 0;
        // console.log(cartItems)
        //loop through all cart items, and for each one, we'll take the number of quantity and add it
        cartItems.forEach(item => {
            // add the quantity of the cartItem to total
            count += item.product.quantity;
        });
        return count;
    }
    console.log(window)
console.log( navigator.geolocation)
    return (
        <Container>
            <HeaderLogo>
                <Link to='/'>
                    <img src={"https://i.imgur.com/7I9Was5.png"} alt=" logo" />
                </Link>
            </HeaderLogo>

            <HeaderOptionAdress>
                <LocationOnIcon />
                <HeaderOption>
                    {/* <OptionLineOne>Hello </OptionLineOne> */}
                    <OptionLineTwo>Select your adress</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAdress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo> Account & List</OptionLineTwo>
                </HeaderOption>

                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>& Order</OptionLineTwo>
                </HeaderOption>
                    <HeaderOptionCart>
                <Link to='/cart'>
                        <ShoppingBasketIcon />
                        <CartCount>
                            {/*  t will call the function and return the number of count */}
                            {getCount()}
                        </CartCount>
                </Link>
                    </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
      
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const HeaderLogo = styled.div`

    img {
        width: 100px;
        margin-left: 11px;
    }
`
const HeaderOptionAdress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div``
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
    @media (max-width: 768px) {
    flex-direction: column;
    display: none;
}
`
const HeaderSearchInput = styled.input`
    flex-grow:1;
    border: 0; 
    :focus {
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

`
const HeaderNavItems= styled.div`
    display: flex;

`
const HeaderOption= styled.div`
    padding: 10px 9px 10px 9px;
    cursor:pointer;

`
const HeaderOptionCart= styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        color: white;
        padding-right: 9px;
        text-decoration: none;
    }
`
const CartCount= styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`
