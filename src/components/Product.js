import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product_imageContainer">
                <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="" />
            </div>
            <div className="product__category">
            <p>Electronics</p>
            </div>
            <div className="product__description">
                <h4>Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</h4>
            </div>
            <div className="pricerating__container">
                    <h2 className="product__price">
                        <small>$</small>
                        <strong>599</strong>
                    </h2>
                    <div className="product__rating">
                    ⭐4.3
                    </div>
            </div>
            

        </div>
    )
}

export default Product
