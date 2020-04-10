import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className='nav'>
    <NavLink className='nav' to='/'>Timeline</NavLink>
    <NavLink className='nav' to='/items'>Product List</NavLink>
    <NavLink className='nav' to='/items'>Create Product</NavLink>
    <NavLink className='nav' to='/create'>Search</NavLink>
    <NavLink className='nav' to="/sign-out">Sign Out</NavLink>
  </nav>
)

export default Navigation