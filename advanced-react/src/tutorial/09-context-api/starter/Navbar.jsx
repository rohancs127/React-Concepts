import React from 'react'
import NavLinks from './NavLinks';

const Navbar = ()=> {
  return (
    <section>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks/>
      </nav>
    </section>
  )
}

export default Navbar;