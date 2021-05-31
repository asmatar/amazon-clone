import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { db } from './firebase';
function App() {

  const [cartItems, setCartItems] = useState([])
  // 8. change the state
  const [user, setUser] = useState(null)

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot)=> {
      console.log(snapshot)
      let tempCartItems = []

      tempCartItems = snapshot.docs.map((doc)=> (
        {
          id: doc.id,
          product: doc.data()
        }
      ));
      setCartItems(tempCartItems)
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])
  console.log('user', user)
  console.log(cartItems)

  return (
    <Router>
      {
        // if the user does NOT exist ( we're log in), we show the login page
        !user ? (
          <Login setUser={setUser}/>
        )
        // if the user exist we show the normal header
        :
        (
        <Container>
        <Header cartItems={cartItems} user={user} />
        <Switch>
        {/* <Route exact path='/login'> */}
          {/* 7. pass the setUser on props */}
              {/* <Login setUser={setUser}/>
          </Route> */}
          <Route exact path='/cart'>
              <Cart cartItems={cartItems}/>  
          </Route>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>
        </Container>
        )
      }
    </Router>
  );
}

export default App;
const Container = styled.div``
