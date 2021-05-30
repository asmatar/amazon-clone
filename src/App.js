import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/cart'>
              <Cart />  
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
