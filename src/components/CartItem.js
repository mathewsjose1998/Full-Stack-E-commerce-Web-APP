import React, { useState,useEffect } from 'react'
import './CartItem.css'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import { useStateValue } from './StateProvider';

const CartItem = ({id,image,title,price,quantity}) => {
 console.log(`quantity in cart ${quantity}`);
   // const [subtotal,setsubtotal]=useState(0)  
  //  const [quantity,setquantity]=useState(1)
 let cart= sessionStorage.getItem('cart');
 console.log(`session storate ${cart}`)
   const [{basket},dispatch]=useStateValue();


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
   console.log("add quantity")

 dispatch({
    type:"ADD_QUANTITY",
    item:{
        id:id,
    }
})

  }

  const subQuantity=()=>{
      if(quantity<2){
            removeItem();
      }
      else{
        dispatch({
            type:"SUB_QUANTITY",
            item:{
                id:id,
            }
        })
      }
   
    
  }




  
    return (
       <div>
        {quantity>0&&
                                    
            <div className="checkout__product">
                                    
            <div className="product_imageContainers">
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
