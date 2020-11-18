import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){

  return (
   
    <div id="about">

      <div className="aboutus">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-3 text-center">
            <img src={myImg} alt="" className="imgResponsive img-circle"></img>
          </div> */}
          {/* <div className="col mt-5 mb-5"> */}
          <h2 className="heading">About Me</h2>
          <div>
            <p className="lead mb-5">
           
              Hi !!! My name is Yakini.Currently, I am pursuing a six month Full Stack Web Development Bootcamp degree at University of Utah. With each passing day, I am gaining the knowledge in various technologies and tools needed to build a successful career as a full stack web developer. 
              I graduated with a Bachelor's degree in Engineering. I had worked as Programmer Analyst and as a Test Engineer.
              I look forward for new opportunities and find a place of work where I can apply my skills and widen my knowledge.

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
            </div>

            <div className="row">
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