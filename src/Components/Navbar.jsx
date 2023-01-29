import React from 'react'
// import Home from '../Components/Home'
// import Login from '../Components/Login'
import { Link,Navigate,Route,Routes,useNavigate } from 'react-router-dom'

const Navbar = ({cart}) => {

const Navigate = useNavigate()


const handleCartButton =() =>{
  Navigate("/CartPage",{state:{cart:cart}})
}




  return (
    
    <div>

 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Food-List-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ml-1 " aria-current="page" to="/"><span className="material-icons">
home
</span>
</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ml-2" to="/UserDet"><span className="material-icons">
account_circle
</span></Link>
        </li>
        
        <li className="nav-item">
          <Link className='nav-link ml-2' to="/Login"><span className="material-icons">
login
</span></Link>
        </li>
        
      </ul>
      <form className="d-flex">       
        
        <button className='nav-link btn btn-light'  onClick={handleCartButton} ><i className="material-icons md-dark"><span className="material-icons">
shopping_cart
</span>
</i></button>
      </form>
      
    </div>
  </div>
</nav>

      
    </div>
  )
}

export default Navbar
