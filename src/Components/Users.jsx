import React from 'react'
import { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        localStorage.setItem('users', JSON.stringify(data));
      }
      fetchUsers();
    }, []);
  
    useEffect(() => {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }, []);
  
    return (
      <div>
        <h2>Users ID and  Password</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>Password =
            {user.username} _______Email= {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Users;