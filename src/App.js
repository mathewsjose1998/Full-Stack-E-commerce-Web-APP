import React from 'react'
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './Home';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Header from './components/Header';
import Checkout from './components/Checkout';

import ProductSingle from './components/ProductSingle';
function App() {
  return (
    <Router>
        <div className="App">
        <Sidebar/>
            <Header/>
        <Switch>

        <Route path="/checkout">
            
            <Checkout/>
           

          </Route>
          <Route path="/product/:productId">
            
            <ProductSingle/>
           

          </Route>
          <Route path="/">
              
             <Home/>
            
        
           
           
          </Route>
          
        </Switch>

        
 
    </div>
    </Router>
    
  );
}

export default App;
