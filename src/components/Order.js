import React from "react";
import "./Order.css";
import moment from "moment";

const Order = ({ order }) => {
  console.log(order);
  return (
    <div className="order__container">
      <div className="order__id">
        <h3>Order ID: {order.id} </h3>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h.mma")}</p>
      </div>

      {order.data.basket.map((item) => (
        <div className="order_product_container">
          <div className="order_product">
            <img src={item.image} alt="" />
            <div className="order__product_details">
              {item.title}
              <div className="order_product_price">
                <p>Price:</p>
                <p>${item.price}</p>
              </div>
              <div className="order_product_quantity">
                <p>Quantity</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="order__total_amount">
        <p>Total Amount</p>
        <h2>${order.data.amount / 100}</h2>
      </div>
    </div>
  );
};

export default Order;
