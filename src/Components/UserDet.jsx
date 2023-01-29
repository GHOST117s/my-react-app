import React from 'react'
import Navbar from '../Components/Navbar'

const UserDet = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <>
        <Navbar/>
        <h1 className="display-1 text-center">Please Login to View user data </h1>
      </>
    )
  }
  
  return (

    <div>
      
    <Navbar/>
    <div className='container m-5'>
    <div className="card m-5 " style={{width: "18rem"}} >
  <img src="https://source.unsplash.com/random/300x200?sig=${Math.random()}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name - {user.name}</h5>
    <p className="card-text">
      
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">UserName -  {user.username}</li>
    <li className="list-group-item">Email -  {user.email}</li>
    <li className="list-group-item">Address - {user.address.street} ,<br/>
   Suite--{user.address.suite}
   <br/>
   City  -  {user.address.city}
   <br/>
   ZipCode  -  {user.address.zipcode}

   </li>
  </ul>
  <div className="card-body">
    {/* <a href="#" className="card-link"></a>
    <a href="#" className="card-link"></a> */}
  </div>
</div>
      </div>
      
    </div>
  )
}

export default UserDet
