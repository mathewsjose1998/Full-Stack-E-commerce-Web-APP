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
import Footer from './components/Footer';
import Payment from './components/Payment';

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise=loadStripe('pk_test_51J0fKoBrTmGzVxTmiIR4jFlFoXh0srq51f6xczLr7amKsrPliplRQnWOIV1bvFPGf4ctGKSOPJUmh2J57YTtNu9n00IHltAc7F')


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

          <Route path="/payment">
            <Elements stripe={promise}>
               <Payment/>
            </Elements>
         
          </Route>

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
