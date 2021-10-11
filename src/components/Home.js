import { css } from "@emotion/react";
import React, { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';
import styled from 'styled-components';
import { db } from '../firebase';
import NavBar from './NavBar';
import Product from './Product';
function Home() {
    const loaderCss = css `
    display: flex;
    justify-content: center;
    color: red;
    margin: 50px auto;
    text-align: center;
    `;
    // we want to save the database into the state react, un products.
    //1. we create a variable products to stock them, which is an empty aray at the beggining
    const [products, setProducts] = useState([])
    //2. we create a function to get the db collection. 
    const getProducts = ()=> {
        //3.we want to grab the table 'product'. we grab the document with 'onSnapshot' which is a native function to get it. We grab the document which is all the firebase things, it's not ourproducts yet !
        db.collection('products').onSnapshot((snapshot)=> {
            // 4. here the all document !
            // console.log(snapshot)
            // 5. creation of a variable to stock the product
            let tempProducts = []
            // after grabing the all document, we want to have acces to our data
            // thez're in 'docs'. we map the docs, and for each one we take it, and put it into tempProducts
            tempProducts = snapshot.docs.map((doc)=> (
                // 6. we get the data, we separate the id but it's not an obligation
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            // 7. we wanna save it into the state, using setProducts, we'll put 'tempProducts' as 'products'
            setProducts(tempProducts)
            setLoading(false)
        })
    }
    // const categoriesFilter = products.filter((product) => (product.product.category === 'laptop'))
    // console.log(categoriesFilter)
    let [loading, setLoading] = useState(true);
  console.log(loading)
    const [filteredCat, setFilteredCat] = useState([])

    const handleClick = (event) => {
        event.preventDefault();
     
            const result = (products.filter((product) => product.product.category === event.target.innerHTML))
          
            // return result
            setFilteredCat(result)
            // setProducts(result)
    }
    const handleClickAll = () =>{
        setFilteredCat(products)
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        
        {
                loading ? <RingLoader css={loaderCss} loading color='blue' size={60} /> :
                <>
        <Container>
            <NavBar products={products} handleClick={handleClick} handleClickAll={handleClickAll}> 
            </NavBar >
            
             
            <Banner />
            <Content>
                {
                    
                filteredCat.length === 0 ?  
                    
                products.map((data) => (
                    <Product 
                    key={data.id}
                    title={data.product.name} 
                    price ={data.product.price}
                    rating ={data.product.rating}
                    image ={data.product.image}
                    id={data.id}
                    />
                ))
                :
                filteredCat.map((data) => (
                    <Product 
                    key={data.id}
                    title={data.product.name} 
                    price ={data.product.price}
                    rating ={data.product.rating}
                    image ={data.product.image}
                    id={data.id}
                    /> 
                ))

                }
                
            </Content>
        </Container>
</>
}
        </>
    )
}

export default Home

const Container = styled.div`
// the max width is 1500 px and to center it, we apply margin 0 auto
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div`
    background-image: url(https://i.imgur.com/SYHeuYM.jpg);
    min-height: 600px;
    // the position of the background
    background-position: center;
    // make sure that no matter that big is the windows screen, it'll cover it
    background-size: cover;
    // to apply a gradient to the background, the opacity go from 1 to 0 from top to bottom
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 1;
`
const Content = styled.div`
    // background: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    /* margin-bottom: 10px; */
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`