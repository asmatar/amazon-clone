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
    display: flex;
    align-items: center;
    background-color: #232F3E;
    height: 50px;
`

const Category = styled.button`

    cursor: pointer; 
    padding: 5px 10px;
    color: white;
    background-color: transparent;
    border: none;
    width: 90px;
    &:hover {
        border: 1px solid white;
    }
`
