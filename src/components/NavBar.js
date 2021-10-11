import React from 'react';
import styled from 'styled-components';
const NavBar = ({products, handleClick}) => {


    // console.log('hors fonction', products)
    //     const handleClick = (cat) => {
    //         console.log('ligne 14')
    //         console.log('ligne 15', cat)
    //         console.log('ligne 16',products)
    //         console.log('ligne 14', products[0].product)
    //     products.filter(product => product.product.category === cat)
    // }
    let cat = []
    products.map((data) => ( 
        cat.push(data.product.category)
    ))
    let category = [...new Set(cat)]
    return (
        <Container>
            {category.map(category => {
                return <Category onClick={handleClick}>{category}</Category>
            })}
        </Container>
    )
}

export default NavBar

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid grey;
    background-color: #232F3E;
    color: white;
    width: 100%;
    height: 20px;
`

const Category = styled.button`
    display: flex;
    margin: 0 20px;
    color: white;
    background-color: #232F3E;
    border: none;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
    }
`
