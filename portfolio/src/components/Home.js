import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from "../img/MyImage.jpg";

// import Wrapper from './Wrapper';
function Home() {

  return (
  
      <div id ="home">
        <div className="landing-text">
          <div className="row">
              <div className="col-md-3 text-center">
                <img src={myImg} alt="" className="imgResponsive img-circle"></img>
              </div>

              <div className="col-md-9">
                <div className="homePageHeading">Hi, I'm </div>
              <p className="homePageHeading"><a href="/#"> Yakini Arumuga Kani <br/>
              Full Stack Web Developer  </a></p>
              </div>
          </div>
        </div>  
      </div>
  );
  }

export default Home;