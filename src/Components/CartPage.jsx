import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { Link,Navigate,Route,Routes,useNavigate } from 'react-router-dom'

const CartPage = () => {

  



    const Navigate = useNavigate()


    const handleCartButton =() =>{
if(cartItems.length === 0) {
  alert("There are no Items in Ur Cart")
  return
}


        Navigate("/CheckOut")
    }

  const location = useLocation();
  const [cartItems, setCartItem] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || []
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (location.state && location.state.cart) {
      setCartItem(location.state.cart);
      sessionStorage.setItem("cart", JSON.stringify(location.state.cart));
    }
  }, [location.state]);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    setTotal(totalPrice);
  }, [cartItems]);

  const handleAdd = (item) => {
    let tempCart = [...cartItems];
    let itemIndex = tempCart.findIndex((x) => x.title === item.title);
    if (itemIndex !== -1) {
      tempCart[itemIndex].price += item.price;
    } else {
      tempCart.push(item);
    }
    setCartItem(tempCart);
  };

  const handleSub = (item) => {

    let tempCart = [...cartItems];
    
    const itemIndex = tempCart.findIndex((i) => i.title === item.title);
    
    if (tempCart[itemIndex].price === item.price) {
    
    tempCart.splice(itemIndex, 1);
    
    } else {
    
    tempCart[itemIndex].price -= item.price;
    
    }
    
    setCartItem(tempCart);
    
    };

  return (
    <>
      <Navbar />
      <h1 className="display-1 text-center"> CART PAGE</h1>
      <div className="container text-center">


        
        {cartItems.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h4 className="card-title">{data.title}</h4>
              <p className="card-text">Price: {data.price}</p>
              {/* <img src={data.img} /> */}
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleSub(data)}
                >
                  -
                </button>
                <span className="badge badge-primary badge-pill">
                  {data.count}
                </span>
                <button
                  className="btn btn-success"
                  onClick={() => handleAdd(data)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container text-center">
        <h4 className="text-center">Total: {total}</h4>
        <button className="btn btn-primary"  onClick={handleCartButton}>Checkout</button>
      </div>
    </>
  );
};

export default CartPage;
