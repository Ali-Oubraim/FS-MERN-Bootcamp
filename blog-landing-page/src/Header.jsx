import React, { useState } from "react";
import bars from "./assets/bars-solid.svg";

function Header({ blogTitle, navigationLinks, isLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(isLoggedIn);


  return (
    <>
      <header>
        <div className="logo">
          <a href="#" className="logo-link">
            {blogTitle}
          </a>
        </div>
        <nav>
          <ul>
            {navigationLinks.map((link, i) => (
              <li key={i}>
                <a href="#">{link}</a>
              </li>
            ))}
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li> */}
          </ul>
        </nav>
        <div className="search-form">
          <form action="#">
            <input type="text" placeholder="Search Post" />
            <button className="btn btn-search">Search</button>
          </form>
        </div>
        {isLoggedIn && (
          <input type="button" className="btn btn-login" value="LOGOUT" />
        )}
        {isLoggedIn || (
          <input type="button" className="btn btn-login" value="LOGIN" />
        )}

        {/* <img src={bars} className="menu-icon" alt="bars icon" /> */}
      </header>
    </>
  );
}

export default Header;
