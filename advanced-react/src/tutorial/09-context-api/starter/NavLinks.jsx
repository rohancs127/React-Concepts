import React from 'react'
import UserContainer from './UserContainer'

function NavLinks(user, logout) {
  return (
    <section>
      <div className='nav-container'>
          <ul className='nav-links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
          </ul>
          <UserContainer user={user} logout={logout}/>
      </div>
    </section>
  )
}

export default NavLinks