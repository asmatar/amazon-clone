import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    let GetToKnowUs = ['Carreers', 'Blog', 'About Amazon', 'Investor Relation', 'Amazon Device']
    let MakeMoneyWithUs = ['Sell products on Amazon', 'Sell on Amazon Business', 'Sell apps on Amazon', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Host an Amazon Hub']
    let AmazonPaymentProducts = ['Amazon Business Card', 'Shop with Points', 'Reload Your Balance', 'Amazon Currency Converter']
    let LetUsHelpYou = ['Amazon and COVID-19', 'Your Account', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Amazon Assistant', 'Help']
    
    return (
    <Container>
        <Content>
            <Title>Get to Know Us</Title>
            <List>
            {      
                GetToKnowUs.map(element => {
                console.log(element);
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
                    console.log(element);
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
                    console.log(element);
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
                    console.log(element);
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
    )
}

export default Footer
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

`
const List = styled.div`
    list-style: none;
    cursor: pointer;
    text-align: left;
    line-height: 35px;
`