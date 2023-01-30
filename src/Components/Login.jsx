import React from 'react'
import Navbar from '../Components/Navbar'
// import Home from  '../Components/Home'
import { useNavigate } from 'react-router-dom'


// import {useHistory} from 'react-router-dom'
import { useState } from 'react'
import Users from './Users'


const Login = () => {
  const navigate = useNavigate()

  localStorage.removeItem('user');

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error ,setError] = useState('');
    // const history = useHistory();

    const users = JSON.parse(localStorage.getItem('users'));


    function handleSubmit(e){
      e.preventDefault();

      const user = users.find((user) => user.email === email && user.username === password);
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        console.log("clicked user");
        // window.location.href = '/';
        navigate('/')
        // history.push('/home')
      }else{
        setError('Invalid email or password');
      }

    }
 


  return (
    <div>
      <Navbar/>

      <div className='container'>
      <Users/>
      </div>


      <div className="card text-center mx-auto mt-5 " style={{ maxWidth: 450 }}>
  <div className="card-header">
    SIGN IN TO UR ACCOUNT
  </div>
  <div className ="card-body ">

      <div className="container m-2 ">
        <form onSubmit={handleSubmit}>
  <div className="mb-3 ">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter ur Registered mail Id"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter ur Password"/>
  </div>
  {error && <p>{error}</p>}
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
    </div>
    </div>
    </div>
  )
}

export default Login
