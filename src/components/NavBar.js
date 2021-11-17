import React from 'react';
import styled from 'styled-components';
const NavBar = ({products, handleClick, handleClickAll}) => {

    let cat = []
    products.map((data) => ( 
        cat.push(data.product.category)
    ))
    let category = [...new Set(cat)]
    return (
        <Container>
          <Category onClick={handleClickAll}> all</Category>
            {category.map(category => {
                return <Category key={category.name} onClick={handleClick}>{category}</Category>
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
