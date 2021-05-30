import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                I'm the content
            </Content>
        </Container>
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
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) )
`
const Content = styled.div`
    background: white;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
`