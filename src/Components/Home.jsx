import React, { useState } from "react";
// import { Route , Routes } from "react-router-dom";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import items from "../food-itmes";
// import CartPage from "./CartPage";

import logo from "../logo.JPG";
import CartPage from "../Components/CartPage";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [cart ,setCart] = useState([]);


  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    // console.log(item);
  }


 

  return (
    

<>

    <Navbar cart={cart}/>
    <main>
      <section className="menu section">
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems}  handleAddToCart={handleAddToCart}/>

        {/* <CartPage cart={cart} /> */}
       


      </section>
    </main>
  
    </>
  );
};

export default Home;
