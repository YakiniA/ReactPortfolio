import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from "../img/MyImage.jpg";

function About(){

  return (
   
    <div id="about">

      <div className="container-fluid aboutus">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img src={myImg} alt="" className="imgResponsive img-circle"></img>
          </div>
          <div className="col-sm-9 mt-5 mb-5">
          <h2 className="heading">About Me</h2>
            <p className="lead">
           
              Hi !!! My name is Yakini. Full Stack Web Developer with the knowledge to build responsive websites that focus mainly on rich user experience. With each passing day, I am gaining the knowledge in various technologies and tools needed to build a successful career as a full stack web developer. 
              I graduated with a Bachelor's degree in Engineering. After graduation, I worked as a
              Programmer Analyst at Cognizant. And also, I worked in a team and did both performance and manual testing for various projects. The experience helped me to widen my skills such as teamwork, onsite-offshore coordination, and localization testing.
              I look forward to enter the industry again and find a place of work where I can apply my skills, widen my knowledge and opportunities for success.

              <br />
              <br />
              I am interested in reading books. I love to dance, which helps me to feel good. I like to chat with people
              and make more friends.
              <br />
              <br />
              Please, check out my resume for more information.
              <br />
            </p>

         
            <h2 className="heading">Skills</h2>
            <ul className="list-group pb-5">
              <li className="list-group-item active">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">JQuery</li>
              <li className="list-group-item">Node</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">MySQL/MongoDB</li>
              <li className="list-group-item">Java</li>
            </ul>
          
          </div>
        </div>
      </div>
    
    
  </div>

  );
}

export default About;