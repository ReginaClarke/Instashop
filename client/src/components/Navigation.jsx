import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className='nav'>
    <NavLink to='/'>Timeline</NavLink>
    <NavLink to='/items'>Product List</NavLink>
    <NavLink to='/items'>Create Product</NavLink>
    <NavLink to='/create'>Search</NavLink>
    <NavLink to="/sign-out" className="signOut">Sign Out</NavLink>
  </nav>
)

export default Navigation