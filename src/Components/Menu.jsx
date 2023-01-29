import React, { useState } from "react";
import Cartpage from "./CartPage";

const Menu = ({ items, addToCart,handleAddToCart}) => {
  // initialize the cart state
  const [cart, setCart] = useState([]);

  // method to add an item to the cart
 


  return (
    <div className="section-center">
      {items.map((item) => {
      
        const { id, title, img, desc, price } = item;
        // console.log("abd",handleAddToCart);
      
        return (
          
          <div className="card mb-3"  key={id} style={{ maxWidth: 450 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                {/* <h5 className="card-title">{id}</h5> */}
                  <h5 className="card-title">Rs.{price}</h5>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>

                  <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </p>

                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            {/* <Cartpage cart={cart} addToCart ={handleAddToCart}/> */}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
