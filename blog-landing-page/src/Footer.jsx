import React from "react";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import twitterIcon from "./assets/twitter.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-head">
          <div className="logo">
            <a href="#" className="logo-link">
              MY BLOG
            </a>
          </div>
          <div className="social-media">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <img src={facebookIcon} alt="facebookIcon" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="instagramIcon" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="twitterIcon" />
              </a>
            </div>
          </div>
          <div className="links">
            <ul>
              <li>
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
              </li>
            </ul>
          </div>
          <div className="msg">
            <h4>The Best Blog</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti ullam dolor suscipit! Assumenda?
            </p>
          </div>
        </div>
        <div className="copy-right">
          <h3>Copyright &copy; 2024. All Right Reserved </h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
