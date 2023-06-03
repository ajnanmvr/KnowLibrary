import React from "react";
import Nav from "./Nav";
import  './Header.css'
function Header() {
  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="#">
            <div>
              <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" />
            </div>
            {/* <img src="https://assets.codepen.io/285131/untitled-ui.svg" /> */}
            <h1>KnowLibrary</h1>
          </a>
        </div>
        <div className="header-navigation">
          <Nav />
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
            <a href="http://dhiu.in/"  target="_blank" title="Darul Huda Official Website" className="avatar">
              <img
                src="https://upload.wikimedia.org/wikipedia/ml/f/f3/Dhiu_logo.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <a href="#" className="button">
          <i className="ph-list-bold" />
          <span>Menu</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
