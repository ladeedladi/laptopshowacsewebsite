import React from 'react'
import logo from "../images/logo.png"
function Header() {
    return (
        <>
    <header className="header">
      <div>
        <img src={logo} alt="" />
        <h1>Soundwave</h1>
      </div>
      <nav>
        <ul>
          <li>Discover</li>
          <li>Home</li>
        </ul>
      </nav>
    </header>
        </>
    )
}

export default Header
