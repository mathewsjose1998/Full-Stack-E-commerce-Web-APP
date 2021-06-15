import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import Order from "./Order";

const Orders = () => {
  const history = useHistory();
  const [orders, setorders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setorders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setorders([]);
      history.push("/login");
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>
        {user?.displayName}, Your Orders
        {console.log(orders)}
      </h1>
      {orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};

export default Orders;
