import React, {forwardRef, useEffect, useState } from 'react'
import Product from './Product'
import './ProductContainer.css'
import FlipMove from 'react-flip-move'

const ProductContainer= ()=> {
    const [products,setproducts]= useState([])
    useEffect(() => {
       
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then((data)=>{
                
                setproducts(data);
            })
                //console.log(data)
             
            
      
  }, [])
 
    return (
        <div className="productcontainer">
          

         
          {
          products.map((product)=>(
              
          
          
                
                    <Product 
                    key={product.id}
                    image={product.image} 
                    title={product.title} 
                    price={product.price} 
                    category={product.category}
                    id={product.id}
                    />
                
                
              
          ))
}


  
        </div>

           
       
    )
}

export default ProductContainer
