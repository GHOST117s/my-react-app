import React from 'react'
// import Home from '../Components/Home'
// import Login from '../Components/Login'
import { Link,Navigate,Route,Routes,useNavigate } from 'react-router-dom'
import logo2 from "../logo2.png";

const Navbar = ({cart}) => {

const Navigate = useNavigate()


const handleCartButton =() =>{
  Navigate("/CartPage",{state:{cart:cart}})
}




  return (
    
    <div>

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ml-5">
  <img src={logo2} alt="" width="60" height="60"/>
    <Link className="navbar-brand" to="/" style={{fontSize:"25px"}} >FoodZone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        
      </ul>
      
      <form className="d-flex">       
      {/* <li className="nav-item">
          <Link className="nav-link ml-1 " aria-current="page" to="/"><span className="material-icons" style={{fontSize:"30px"}}>
home
</span>
</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link ml-2" to="/UserDet"><span className="material-icons" style={{fontSize:"30px"}}>
account_circle
</span></Link>
        </li>
        <li className="nav-item">
          <button className='nav-link ml-2' to="/Login"  onClick={handleCartButton}><i className="material-icons md-dark"><span className="material-icons" style={{fontSize:"30px"}}>
shopping_cart
</span>
</i></button>
        </li>



        
        <li className="nav-item">
          <Link className='nav-link ml-2' to="/Login"><span className="material-icons" style={{fontSize:"30px"}}>
login
</span></Link>
        </li>

    


      </form>
      
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar
