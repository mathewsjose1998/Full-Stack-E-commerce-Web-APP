import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './ProductSingle.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';

const ProductSingle = () => {
    const [isadded,setadded]=useState(false)
const [{basket},dispatch]=useStateValue();

console.log(` ${JSON.stringify(basket)}`)
console.log(basket?.length);
const addToCart=()=>{
    //DISPATCH the item to the datalayer

    dispatch({
        type:"ADD_TO_CART",
        item:{
            id:item.id,
            title:item.title,
            image:item.image,
            price:item.price,
        },
    })
    setadded(true);
}

    let {productId}=useParams();
    const [item,setitem]=useState('')
    //console.log(productid)
    useEffect(() => {
            console.log(productId)  
            fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then((data)=>{
                basket.map((item)=>{
                    if(item.id==data.id){
                        setadded(true);
                    }
                })
                    setitem(data)
            })  
     }, [])
     

    
    return (
      
        
            <div className="productsingle">
                {item &&
            (

                <div>

<div className="productsingle__container">
               <div className="productsingle__image">
                   <img src={item.image} alt="" />
               </div>
               <div className="productsingle__details">
                   <div className="details__title">
                        <h2>{item.title}</h2>
                   </div>
                   <div className="details__description">
                        <p><li>
                       {item.description}
                        </li>
                          
                        </p>
                   </div>
               </div>
           </div>
           <div className="price__container">
               <div className="wrap">
               <div className="price">
                    <strong>${item.price}</strong>
               </div>
               {item.price>30?
             <div className="delivery__info">
             Free Delivery Available -Stafford, TX 77477
             </div>
             :
             <div className="delivery__info">
             Delivery Available(Fee: $8) - Stafford, TX 77477
             </div>   
            
            }
            {   
        
                isadded===true?(
                   
                    <button  className="addtocart" >
                    <ShoppingCartIcon/>
                     Added
                     </button>
                ):
                (
                   
                    <button onClick={addToCart}  className="addtocart" >
                   <ShoppingCartIcon/>
                    Add to Cart
                    </button>
                )
            }
              
               
               </div>
               
           </div>
            
                    
                </div>


            )



            
            }
            
          
        </div>
            
        
        
    )
}

export default ProductSingle
