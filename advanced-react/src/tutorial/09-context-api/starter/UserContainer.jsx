import React from 'react'

function UserContainer({user, logout}) {
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