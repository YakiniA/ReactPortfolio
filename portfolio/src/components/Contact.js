import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillGithub , AiFillLinkedin} from "react-icons/ai";
import Resume from "../Resume/Yakini_Resume.pdf"
function Footer(){

return(
<div id="contact">
    <footer className="container-fluid">
      <div className="row">
        <div className="col-sm-6 text-center">

          <div className="heading">Contact Details
          <br /> <br />
           <div className="contents"> I am ready for hire and open to new opportunities<br />
            Phone : 508-494-3722<br/>
            Email : yakinilatha09@gmail.com<br /> <br /></div>
          <a href={Resume} className="btn btn-primary btn-light contents" download="Resume">Check out
            my Resume</a>
            </div>

        </div>

        <div className="col-sm-6 text-center">

          <h3 className = "heading">Connect</h3>
          <br />
          <a href="tel:5084943722">
            <FaPhoneAlt style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
          </a>
          <a href="mailto:yakinilatha09@gmail.com">
            <GrMail style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
          </a>
          <a href="https://github.com/YakiniA" target="_blank" rel="noopener noreferrer">
            <AiFillGithub style={{height: "3em", width:"3em", color: "white", marginRight:"2em"}}/> 
          </a>
          <a href="https://www.linkedin.com/in/yakini-arumuga-kani-84265464/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin style={{height: "3em", width:"3em", color: "white"}}/> 

            </a>
        </div>
      </div>
    </footer>
  </div>
);
}

export default Footer;
