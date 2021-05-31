import React from 'react';
import styled from 'styled-components';
// on import le provider de firebase
import { auth, provider } from '../firebase';

function Login({setUser}) {
// 2. cf firebase documntation
    const SignIn = () => {
        //3. we get the user and put it in the .then result
        auth.signInWithPopup(provider).then((result) => {
            //4. we stock the user in 'user'
            let user = result.user;
            //5. the user is an object which contain many thigs, we stock the user info in a variable new user
            console.log('auth. signinwithpopup', user)
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            // 6. we put the new user Info as a parameter of setUser which'll change the state 'user' property, we pass it on props
            console.log('je suis dans le setUser avant', newUser)
            setUser(newUser)
            console.log('je suis dans le setUser apres', newUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }


    return (
        <Container>
            <Content>
                <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
                <h1>Sign into Amazon</h1>
                {/* 1. we click and execute SignIN which do something ( line8) */}
                <LoginButton onClick={SignIn}>
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px grey;
    text-align: center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`