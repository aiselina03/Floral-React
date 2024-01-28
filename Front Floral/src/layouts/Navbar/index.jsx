import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"
function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h2><NavLink to={"/"}>Floral Studio</NavLink></h2>
      </div>
      <div className="menu">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/addPage"}>Add Page</NavLink></li>
        <li><NavLink to={"/basket"}>Basket</NavLink></li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
      </div>
    </div>
    </>
  )
}

export default Navbar