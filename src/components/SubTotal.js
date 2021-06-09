import React,{useEffect, useState} from 'react'
import CurrencyFormat from 'react-currency-format'
import "./SubTotal.css"
import { useStateValue } from './StateProvider';
import {getItemTotal, getTotalPrice} from '../reducer'
import {useHistory} from 'react-router-dom'



const SubToatal = () => {
     const [{basket,user},dispatch]=useStateValue();
  const history=useHistory()
const proceedPayment=()=>{
        if(!user){
                history.push('/login')
        }
}
    
    return (

        <div className="subtotal">




<CurrencyFormat 
renderText={(value)=>(

    <>
        <span>Checkout</span>
           <div className="subtotal_price">
               <h2>Sub-Total:{value}</h2>
           
           <p>Number of Items : {getItemTotal(basket)} </p>
           <p>This price is exclusive of taxes. Taxes will be added during checkout.</p>
           </div>
           <div className="proceedpayment">
                 <button onClick={proceedPayment}>Procced to Payment</button>
           </div>
    </>

)}
decimalScale={2}
value={getTotalPrice(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}

/>



           
  
        </div>
    )
}

export default SubToatal


{/* <CurrencyFormat 
renderText={(value)=>(

    <>
    <p>
        SubTotal (0 items): <strong>599</strong>
    </p>
    <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains gift
    </small>
    </>

)}
decimalScale={2}
value={0}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}

/>

<button>Procced to payment</button> */}