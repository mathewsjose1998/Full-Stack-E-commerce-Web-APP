import React from 'react'
import CurrencyFormat from 'react-currency-format'
import "./SubTotal.css"

const SubToatal = () => {
    return (
        <div className="subtotal">
           <span>Checkout</span>
           <div className="subtotal_price">
               <h2>Sub-Total:$22.99</h2>
           
           <p>Number of Items</p>
           <p>This price is exclusive of taxes. Taxes will be added during checkout.</p>
           </div>
           <div className="proceedpayment">
                 <button>Procced to Payment</button>
           </div>
  
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