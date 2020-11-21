import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){

  return (
   
    <div id="about">
      <div className="aboutus padding">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-3 text-center">
            <img src={myImg} alt="" className="imgResponsive img-circle"></img>
          </div> */}
          {/* <div className="col mt-5 mb-5"> */}
          <h2 className="text-center heading mb-3">About Me</h2>
        
            <p className="lead">
           
              Hi !!! My name is Yakini. I am a Full Stack Web Development Bootcamp graduate at the University of Utah. Hands-on experience in various technologies helped me build responsive websites that focus mainly on rich user experience.
              My interest is developing projects on the MERN stack as it is more smooth, comfortable, and exciting.
              I graduated with a Bachelor's degree in Engineering. I had worked as Programmer Analyst and as a Test Engineer.
              I look forward to new web development opportunities and find a workplace where I can apply my skills and widen my knowledge.

              <br />
              <br />
              I am interested in reading books. I love to dance, which helps me to feel good. I like to chat with people
              and make more friends.
              <br />
              <br />
              Please, check out my resume for more information.
              <br />
            </p>
          
            </div>
            <br />
            <br />

            <div className="row mt-5">
              <header className="text-center mr-3">
                <h2 className="text-center heading">Skills</h2>
              </header>

              <ul className="list-group">
                <li className="list-group-item active">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Javascript</li>
                <li className="list-group-item">JQuery</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Node</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Java</li>
              </ul>
            
              </div>
          </div>
          </div>
        </div>
  );
}

export default About;