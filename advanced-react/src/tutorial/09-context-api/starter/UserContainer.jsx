import React from 'react'
import { useContext } from 'react';
import { NavbarContext, useAppContext } from './Navbar';

function UserContainer() {

  const {user, logout} = useAppContext();
  // console.log(value);
  return (
    <section>
      <div className='user-container'>  
        {
          user ? (
            <>
              {/* <p>Hello There! {user.name}</p> */}
              <p>Hello There! {user?.name}</p>

              <button className='btn' onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <p>Please login</p>
              <button className='btn'>Login</button>
            </>
          )
        }
      </div>
    </section>
  )
}

export default UserContainer