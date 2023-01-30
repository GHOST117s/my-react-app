import React, { useState } from "react";
// import { Route , Routes } from "react-router-dom";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import items from "../food-itmes";
// import CartPage from "./CartPage";


// import logo from "../logo.JPG";
// import CartPage from "../Components/CartPage";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [cart ,setCart] = useState([]);
  const [showAlet ,setShowAlert] = useState(false)
  const [showlogin ,setLogin] = useState(false)


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


  const user =localStorage.getItem("user")
  if(!user){
    return setLogin(true)
  }    
  
    setCart([...cart, item]);
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
    },1000)
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
{showlogin && <div className="alert alert-danger" role="alert">
            Please login to Add items to Ur cart 
            </div>}

         {showAlet && <div className="alert alert-success" role="alert">
            Item Added to Ur Cart!
            </div>}
        <Menu items={menuItems}  handleAddToCart={handleAddToCart}/>

        {/* <CartPage cart={cart} /> */}
       


      </section>
    </main>
  
    </>
  );
};

export default Home;
