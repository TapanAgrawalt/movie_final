import React from "react";
import classes from "./Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <div className={classes.boxs}>
        <div className={classes.ali}>
          <div className={classes.cwitet}>Connect with</div>
        </div>
        <div className={classes.al}>
          <div className={classes.bb}>
           <a href="#"> <BsInstagram /></a>
          </div>
          <div className={classes.bb}>
           <a href="#"> <BsTwitter /></a>
          </div>
          <div className={classes.bb}>
            <a href="#"><BsFacebook /></a>
          </div>
          <div className={classes.bb}>
            <a href="#"><AiOutlineLinkedin /></a>
          </div>
        </div>
       
        <ul className={classes.al}>
            <li ><a href="/Aboutus">About Us  &nbsp;&nbsp;|</a></li>
            <li ><a href="/FAQS">FAQs  &nbsp;&nbsp;|</a></li>
            <li ><a href="/PrivacyPolicy">Privacy Policy  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Feedback">Feedback  &nbsp;&nbsp;|</a></li>
            <li><a href="/News">News  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Carrer">Career  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Notification">Notification  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Zovies">Movies  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Workwithus">Work with us  &nbsp;&nbsp;|</a></li>
            <li ><a href="/Contactus">Contact Us</a></li>

          </ul>
     
        <div className={classes.lowc}>
          <p className={classes.cwite}>COPYRIGHT @ 2022 PVR LTD.ALL RIGHTS RESERVED</p>
        </div>
      </div>
      </footer>
  );
}

export default Footer;
