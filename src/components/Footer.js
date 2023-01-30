import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/chandu-ajmeera-39b737238"> <LinkedInIcon /> </a>
        <a href="https://www.instagram.com/"> <InstagramIcon /> </a>
        <a href="https://g.co/kgs/4bDaPi"> <TwitterIcon /> </a>
      </div>

    </div>
  );
}

export default Footer;