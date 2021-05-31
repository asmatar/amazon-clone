import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import { db } from './firebase';

function App() {

  const [cartItems, setCartItems] = useState([])

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

  console.log(cartItems)

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems}/>
        <Switch>
          <Route exact path='/cart'>
              <Cart cartItems={cartItems}/>  
          </Route>
          <Route exact path='/'>
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
