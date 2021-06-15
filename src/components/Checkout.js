import React from 'react'
import CartItem from './CartItem'
import FlipMove from 'react-flip-move'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import SubTotal from './SubTotal'

const Checkout = () => {
    const [{basket},dispatch]=useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__header">
                <h1>Your Cart</h1>
            </div>
            <div className="checkout__container">
                <div className="checkout__products">
               
                    {
                        basket&&
                      
                        (   
                            basket.map((item)=>(
                                
                                <CartItem key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} quantity={item.quantity} />
                                   
                            ))
                        )
                        
                    }
                  
                    
                     
                   


                   
                   
                </div>

                <div className="checkout__subtotal">
                    <SubTotal/>
                </div>
            </div>
  
           
        </div>
    )
}

export default Checkout
