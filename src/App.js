import React,{useEffect} from 'react'
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './Home';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Header from './components/Header';
import Checkout from './components/Checkout';

import ProductSingle from './components/ProductSingle';
import Login from './components/Login';
import Signup from './components/Signup';
import {auth} from './firebase'
import { useStateValue } from './components/StateProvider';
import Profile from './components/Profile';

function App() {
const [{},dispatch]=useStateValue()

  useEffect(() => {
    //listner for auth changes
   auth.onAuthStateChanged(authUser=>{
    console.log(`the user is  >>> ${authUser}`)
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser,
        
      })
 
    }
    else{
     dispatch({
       type:"SET_USER",
       user:null
     })
    }

   })
  
  }, [])
  return (
    <Router>
        <div className="App">
        <Sidebar/>
            <Header/>

        <Switch>

          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

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
