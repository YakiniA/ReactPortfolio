import React from 'react';

function Footer(){

return(
<div id="contact">
    <footer className="container-fluid">
      <div className="row">
        <div className="col-sm-6 text-center">

          <h3>Contact Details</h3>
          <br />
          <h4>I am ready for hire and open to new opportunities</h4><br />
          <h4>Phone : 508-494-3722</h4>
          <h4>Email : yakinilatha09@gmail.com</h4><br />
          <a href="Resume/Yakini Resume.pdf" className="btn btn-primary btn-light" download="Resume">Check out
            my Resume</a>
        </div>

        <div className="col-sm-6 text-center">

          <h3>Connect</h3>
          <br />
          <a href="tel:5084943722" className="fa fa-phone icons"></a>
          <a href="mailto:yakinilatha09@gmail.com" className="fa fa-envelope icons"></a>
          <a href="https://github.com/YakiniA" target="_blank" rel="noopener noreferrer" className="fa fa-github icons"></a>
          <a href="https://www.linkedin.com/in/yakini-arumuga-kani-84265464/" target="_blank" rel="noopener noreferrer"
            className="fa fa-linkedin icons"></a>


        </div>

      </div>
    </footer>
  </div>
);
}

export default Footer;
