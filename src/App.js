import React from 'react'
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './Home';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Header from './components/Header';
function App() {
  return (
    <Router>
        <div className="App">
        <Switch>

        <Route path="/checkout">
            <Sidebar/>
            <Header/>
            
           

          </Route>
          <Route path="/">
              <Header/> 
             <Sidebar/>
             <Home/>
        
           
           
          </Route>
          
        </Switch>

        
 
    </div>
    </Router>
    
  );
}

export default App;
