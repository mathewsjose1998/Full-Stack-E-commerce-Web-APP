import { Link } from "react-router-dom";
import React, { forwardRef } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { motion } from "framer-motion";

const Product = ({ image, title, price, category, id }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }} key={id}>
      <motion.div initial="initial" animate="in" exit="out" className="product">
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
            ⭐{Math.floor(Math.random() * 4) + 2}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Product;
