import React from 'react'

function UserContainer(user, logout) {
  console.log(user);
  return (
    <section>
      <div className='user-container'>
        <p>Hello There! {user.name}</p>
        <button className='btn' onClick={logout}>Logout</button>
      </div>
    </section>
  )
}

export default UserContainer