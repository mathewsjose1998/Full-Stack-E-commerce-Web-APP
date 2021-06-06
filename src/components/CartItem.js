import React, { useState,useEffect } from 'react'
import './CartItem.css'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import { useStateValue } from './StateProvider';

const CartItem = ({id,image,title,price}) => {
 
    const [subtotal,setsubtotal]=useState("0")
   const [quantity,setquantity]=useState("1")
   const [{basket},dispatch]=useStateValue();

   useEffect(() => {
        
   

if(quantity<1){
    removeItem();
}
console.log(subtotal)

      
   }, [quantity,id])

const removeItem=()=>{
    dispatch({
        type:"REMOVE_ITEM",
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
        },
    })
}
  const addQuantity=()=>{
      setquantity(parseInt(quantity)+1)
  }
  const subQuantity=()=>{
    setquantity(parseInt(quantity)-1)
}

  
    return (
       <div>
        {quantity>0&&
                                    
            <div className="checkout__product">
                                    
            <div className="product_imageContainer">
                 <img src={image} alt="" />
             </div>
            
             <div className="product__details">
                 <p> {title}</p>
                 <div className="pricerating__container">
                 <h2 className="product__price">
                     <small>$</small>
                     <span>{price}</span>
                 </h2>
                 <div className="quantity__container">
                      <button onClick={subQuantity}>-</button>
                   
                     <p>{quantity}</p>
                     <button onClick={addQuantity}>+</button>
                   
                     <RemoveShoppingCartIcon style={{ background: "red" ,color:"white", margin:"0 10px" , borderRadius: "4px" ,padding:"2px"}} onClick={removeItem} />
                 </div>
                    
             </div>
           
             </div>
            

         </div>
    
    
    }
</div>
       
    )
}

export default CartItem
