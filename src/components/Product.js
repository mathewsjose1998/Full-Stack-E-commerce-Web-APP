import { Link } from 'react-router-dom';
import React from 'react'
import './Product.css'

const Product = ({image,title,price,category,id}) => {
    
    
    return (

        
     <Link to={`/product/${id}`} style={{ textDecoration: 'none' }} >  <div className="product">
            <div className="product_imageContainer">
                <img src={image} alt="" />
            </div>
            <div className="product__category">
            <p>{category}</p>
            </div>
            <div className="product__description">
                <h4> {title}</h4>
            </div>
            <div className="pricerating__container">
                    <h2 className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </h2>
                    <div className="product__rating">
                    ⭐4.3
                    </div>
            </div>
            

        </div>
        </Link> 
    )
}

export default Product
