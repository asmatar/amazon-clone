import React from 'react';
import styled from 'styled-components';
const NavBar = ({products, handleClickCat}) => {
    // const categoryFilter = (event) => {
    //     event.preventDefault()
    // console.log(event)
    // }
    // const handleClick = (ok) => {
    //     console.log(ok)
    //     // handleClickCat(e.target.innerHTML)
    // }
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
        console.log(cat)
    let category = [...new Set(cat)]
    console.log(category)
    return (
        <Container>
            {category.map(category => {
                return <Category>{category}</Category>
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
    margin-left: 20px;
    color: white;
    /* width: 80px; */
    /* height: 50%; */
    background-color: #232F3E;
    border: none;
    cursor: pointer;
    &:hover {
        border: 1px solid white;
        border: none;
    }
`
