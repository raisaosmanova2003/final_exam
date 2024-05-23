import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Home from '../../../pages/site/Home/Home'
const Header = () => {
  return (
    <header>
      <div className="header_top">
        <div className="header_top_left">
        <div className="header_top_left_img">
        <img src="https://preview.colorlib.com/assets/img/logo.png" alt="" />
        </div>
         <div className="header_top_left_title">
          <p>+ WINES</p>
         </div>
        </div>
        <div className="header_right">
          <ul>
            <li><i class="fa-solid fa-display"></i></li>
            <li><i class="fa-solid fa-tablet"></i></li>
            <li><i class="fa-solid fa-mobile-screen"></i></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li><i class="fa-solid fa-xmark"></i></li>
          </ul>
        </div>
      </div>
      <div className="header_end">
        <div className="header_end_img">
          <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />
        </div>
        <div className="nav">
          <ul>
            <li><Link to=''>Home</Link></li>
            <li><Link to='basket'>basket</Link></li>
            <li><Link to='detail/:id'>detail</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='wishlist'>Wishlist</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
