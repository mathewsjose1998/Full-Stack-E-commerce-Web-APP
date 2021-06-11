import React, { useState, useEffect } from "react";
import "./Payment.css";
import { getTotalPrice } from "../reducer";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
const Payment = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [tax, settax] = useState(0);
  const [grandTotal, setgrandTotal] = useState(0);
  const [processing, setprocessing] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [succeeded, setsucceeded] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setclientSecret] = useState("");
  const [orderId, setorderId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const calculateTax = () => {
      let totalprice = getTotalPrice(basket);
      let taxpercentage = 5;
      let totaltax = (taxpercentage / 100) * totalprice;
      console.log(totaltax);
      settax(totaltax.toFixed(2));
      console.log(tax);
      console.log(parseInt(totalprice) + parseInt(tax));
      let total = (parseFloat(totalprice) + parseFloat(totaltax)).toFixed(2);
      setgrandTotal(total);
      console.log(parseFloat(grandTotal) * 100);
    };
    calculateTax();
  }, []);

  useEffect(() => {
    if (basket.length < 1) {
      history.push("/");
    }
    const getClientSecret = async () => {
      console.log(grandTotal);
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getTotalPrice(basket) * 100}`,
      });
      console.log(response);
      setclientSecret(response.data.clientSecret);
      setorderId(response.data.id);
    };
    basket && getClientSecret();
  }, [basket]);

  console.log(`CLIENT SECRET payment.js ${clientSecret}`);

  const handleCardChange = (event) => {
    setdisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setprocessing(true);

    //client secret is the somthing which tells the stripe how much to charge
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment intent is like payment confirmation
        setsucceeded(true);
        setError(null);
        setprocessing(false);
        dispatch({
          type: "REMOVE_ALL_ITEMS",
        });

        alert("Order Successfully Placed");
        //history.replace("/orders");
      });
  };

  return (
    <div className="payment">
      <div className="payment__header">
        <h2>Complete your Payment</h2>
      </div>
      <div className="payment__container">
        <div className="payment__info">
          <div className="payment___info_header">
            <h4>How'd you like to pay?</h4>
            <p>
              Choose a payment method and verify your details to successfully
              place the order.
            </p>
          </div>

          <div className="payment__card">
            <input
              type="text"
              placeholder="Name (as appears in card)"
              className="payment__cardName"
            />
            <form onSubmit={handleSubmit}>
              <CardElement
                onChange={handleCardChange}
                options={{
                  style: {
                    base: {
                      fontSize: "15px",
                      fontWeight: "800",
                      fontFamily: "Nunito Sans, sans-serif",
                      iconColor: "#fff",

                      color: "#f4532",
                      textShadow: "1px 1px 2px rgba(26,26,44,0.25)",
                      "::placeholder": {
                        color: "#fefefe",
                        textShadow: "none",
                      },
                      ":-webkit-autofill": {
                        color: "#fff",
                      },
                    },
                    invalid: {
                      color: "#fee",
                      textShadow: "2px 2px 4px red",
                    },
                  },
                }}
              />
            </form>
          </div>
        </div>
        <div className="payment__order_summary">
          <h3>Order Summary</h3>
          <div className="order_id">
            Order ID: {orderId ? orderId : "Generating.."}
          </div>
          <div className="order_product_container">
            {basket?.map((item) => (
              <div className="order_product">
                <p className="order_product_title">{item.title}</p>
                <small className="order_product_quantity">
                  {" "}
                  x{item.quantity}
                </small>
                <p className="order_product_price">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="order_total_container">
            <div className="total_price">
              <p>Total</p>
              <p>${getTotalPrice(basket).toFixed(2)}</p>
            </div>
            <div className="tax_total">
              <p>Tax(+5%)</p>
              <p>${tax}</p>
            </div>
          </div>

          <div className="grand_total">
            <b>Grand Total</b>
            <h2>
              <small>$</small>
              {grandTotal}
            </h2>
          </div>

          <div className="paynow_button">
            <button
              onClick={handleSubmit}
              disabled={processing || disabled || !succeeded}
            >
              <span>{processing ? <p>Processing</p> : <p>PAY NOW</p>}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
