import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="#">
            <div>
              <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" />
            </div>
            <img src="https://assets.codepen.io/285131/untitled-ui.svg" />
          </a>
        </div>
<NavBar/>
        <a href="#" className="button">
          <i className="ph-list-bold" />
          <span>Menu</span>
        </a>
      </div>
    </header>
  )
}

export default Header