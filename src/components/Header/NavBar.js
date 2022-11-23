import React from 'react'
import Nav from './Nav'

function NavBar() {
  return (
    <div className="header-navigation">
   <Nav/>
              <div className="header-navigation-actions">
                <a href="#" className="button">
                  <i className="ph-lightning-bold" />
                  <span>Contact Admin</span>
                </a>
                <a href="#" className="icon-button">
                  <i className="ph-gear-bold" />
                </a>
                <a href="#" className="icon-button">
                  <i className="ph-bell-bold" />
                </a>
                <a href="#" className="avatar">
                  <img src="https://avatars.githubusercontent.com/u/94433947?v=4" alt="" />
                </a>
              </div>
            </div>  )
}

export default NavBar