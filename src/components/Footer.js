import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    let GetToKnowUs = ['Carreers', 'Blog', 'About Amazon', 'Investor Relation', 'Amazon Device']
    let MakeMoneyWithUs = ['Sell products on Amazon', 'Sell on Amazon Business', 'Sell apps on Amazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Host an Amazon Hub']
    let AmazonPaymentProducts = ['Amazon Business Card', 'Shop with Points', 'Reload Your Balance', 'Amazon Currency Converter']
    let LetUsHelpYou = ['Amazon and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Amazon Assistant', 'Help']
    
    const backToTop = () => {
       window.scrollTo({
           top:0, 
        behavior: 'smooth'
    })
    }
    return (
        <>
        <Buton onClick={backToTop}> Back to top</Buton>
    <Container>
        <Content>
            <Title>Get to Know Us</Title>
            <List>
            {      
                GetToKnowUs.map(element => {
                return (        
                    <>
                        <List>  
                            <Ul>
                                <li>{element}</li>
                            </Ul>
                        </List>
                    </>
                )
                })
            }
            </List>
        
            </Content>
            <Content>
                <Title>MakeMoneyWithUs</Title>
                <List>
                {      
                    MakeMoneyWithUs.map(element => {
                    return (        
                        <>
                            <List>  
                                <Ul>
                                    <li>{element}</li>
                                </Ul>
                            </List>
                        </>
                    )
                    })
                }
                </List>
            </Content>
            <Content>
                <Title>Amazon Payment Products</Title>
                <List>
                {      
                    AmazonPaymentProducts.map(element => {
                    return (        
                        <>
                            <List>  
                                <Ul>
                                    <li>{element}</li>
                                </Ul>
                            </List>
                        </>
                    )
                    })
                }
                </List>
            </Content>
            <Content>
                <Title>Let Us Help You</Title>
                <List>
                {      
                    LetUsHelpYou.map(element => {
                    return (        
                        <>
                            <List>  
                                <Ul>
                                    <li>{element}</li>
                                </Ul>
                            </List>
                        </>
                    )
                    })
                }
                </List>
            </Content>
       </Container>
       </>
    )
}

export default Footer

const Buton =styled.button`
background-color: #37475A;
height: 50px;
width: 100vw;
border: none;
color: white;
:hover{
        background-color: rgba(80,87,100);
        cursor: pointer;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #232F3E;
    padding: 30px 0 100px;
    color: white;
`
const Content = styled.div`
    margin: 0 40px;
    line-height: 25px;
`
const Title = styled.h4`
    font-weight: bold;
`
const Ul = styled.div`
    text-align: left;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const List = styled.div`
    list-style: none;
    text-align: left;
    line-height: 35px;
`