import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import fightClub from '../img/welcomePage.png'; 
import spaceExploration from '../img/spaceexplorationportfolio.jpg';
import codingQuiz from '../img/CodingQuizPortfolio.jpg';
import weatherDashboard from '../img/WeatherDashboardportfolio.jpg';
import workScheduler from '../img/WorkdaySchedulerPortfolio.jpg';
import burgerAppln from '../img/Snapshot.png';
import noteTaker from '../img/Screenshot.jpg';
import readMeGenerator from '../img/ReadMeGenerator.jpg';
import teamGenerator from '../img/TeamGenerator.gif';
import employeeTracker from '../img/employee-tracker.gif';

class Portfolio extends Component{

render(){
return(
<div>
<div id="portfolio">
    <div className="projects padding">
      <div className="container">
        <div className="row">
          <header className="text-center">
            <h2 className="text-center">Projects</h2>
          </header>
        </div>
        <br />
        <br />

        <div className="text-center">
          <div className="row">

            <div className="card" style={{width: 350}}>
              <div className="card-image">
                <img src={fightClub} className="card-img-top" alt="Fight club" style={{width: "100%"}}></img>
              </div>

              <div className="card-content">
                <span className="card-title">The Fight Club</span>

                <button type="button" className="btn btn-custom pull-right show-btn" data-rel="1" aria-label="Left Align">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
              </div>

              <div className="card-action">
                <a href="https://github.com/AtimaB/The-Fight-Club" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/AtimaB/The-Fight-Club" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="1" style={{display: "none"}}>
                <span className="card-title">The Fight Club</span>
                <button type="button" className="close" data-rel="1" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Real time gaming app where two users can fight with each other, and at the end of the game displays
                  their scores.<br /><br />
                  Technologies Used : Node, Express, SocketIO, MySQL, Handlebars

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={spaceExploration} className="card-img-top" alt="Space Exploration"
                  style={{width: "100%"}}></img>
              </div>

              <div className="card-content">
                <span className="card-title">Space Exploration</span>

                <button type="button" className="btn btn-custom pull-right show-btn" data-rel="2" aria-label="Left Align">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
              </div>

              <div className="card-action">
                <a href="https://jordanrbunnell.github.io/spaceexploration/" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://jordanrbunnell.github.io/spaceexploration/" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="2" style={{display: "none"}}>
                <span className="card-title">Space Exploration</span>
                <button type="button" className="close" data-rel="2" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Mobile-focused web app where users can explore, and know about the space related stuffs from NASA
                  API.<br /><br />
                  Technologies Used : HTML, Materialize CSS, Javascript, JQuery, ThirdPartyAPIs

                </p>
              </div>

            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={codingQuiz} className="card-img-top" alt="Coding Quiz" style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Coding Quiz</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="3" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>


              <div className="card-action">
                <a href="https://yakinia.github.io/04-WebAPIs-CodeQuiz/" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://yakinia.github.io/04-WebAPIs-CodeQuiz/" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="3" style={{display: "none"}}>
                <span className="card-title">Coding Quiz</span>
                <button type="button" className="close" data-rel="3" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Web app where users have to answer the Javascript questionnaire within the given time.<br /><br />
                  Technologies Used : HTML, CSS, Javascript

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={weatherDashboard} className="card-img-top" alt="Weather Dashboard"
                  style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Weather Dashboard</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="4" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://yakinia.github.io/06-ServerSideAPIs-WeatherDashboard/" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://yakinia.github.io/06-ServerSideAPIs-WeatherDashboard/" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="4" style={{display: "none"}}>
                <span className="card-title">Weather Dashboard</span>
                <button type="button" className="close" data-rel="4" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Mobile-focused web app where users can see the weather details of a city, using third party
                  API.<br /><br />
                  Technologies Used : HTML, Bootstrap CSS, Javascript, JQuery, Third Party API

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={workScheduler} className="card-img-top" alt="Workday Scheduler"
                  style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Workday Scheduler</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="5" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://yakinia.github.io/05-ThirdPartyAPIs-WorkDayScheduler/" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://yakinia.github.io/05-ThirdPartyAPIs-WorkDayScheduler/" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="5" style={{display: "none"}}>
                <span className="card-title">Workday Scheduler</span>
                <button type="button" className="close" data-rel="5" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Web Apllication that helps the user to save events for each hour of the day.<br /><br />
                  Technologies Used : HTML, CSS, Javascript, JQuery

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={burgerAppln} className="card-img-top" alt="Burger Application"
                  style={{width: "100%", height:231}}></img>
              </div>

              <span className="card-title">Eat-Da Burger</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="6" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://github.com/YakiniA/13-NodeExpress-Handlebars" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/YakiniA/13-NodeExpress-Handlebars" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="6" style={{display: "none"}}>
                <span className="card-title">Eat-Da Burger</span>
                <button type="button" className="close" data-rel="6" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>Eat-Da Burger is an application which helps to add the burgers, after being added is displayed with
                  `Devour it!` button
                  and can get the burger `Devoured` by pressing the `Devour it!` button.<br /><br />
                  Technologies Used : Node, Express, Handlebars, MySQL, ORM

                </p>
              </div>

            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={noteTaker} className="card-img-top" alt="Note taker" style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Note Taker</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="7" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://github.com/YakiniA/11-Express-NoteTaker" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/YakiniA/11-Express-NoteTaker" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="7" style={{display: "none"}}>
                <span className="card-title">Note Taker</span>
                <button type="button" className="close" data-rel="7" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>The purpose of this application is to develop a note taker that can be used to write, save, and
                  delete notes. This application uses node with express backend to save and retrieve note data from the
                  JSON file. <br /><br />
                  Technologies Used : HTML, Bootstrap CSS, Node, Express.

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={readMeGenerator} className="card-img-top" alt="Read me generator" style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Good ReadMe Generator</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="8" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://github.com/YakiniA/09-Node.js-ES6-GoodREADMEGenerator" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/YakiniA/09-Node.js-ES6-GoodREADMEGenerator" target="_blank"
                  data-toggle="tooltip" data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="8" style={{display: "none"}}>
                <span className="card-title">ReadMe Generator</span>
                <button type="button" className="close" data-rel="8" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>This application focuses on dynamically generate a high quality README file using command line
                  application. This allows the project creator to spend less time creating a good README. It accepts the
                  user's input using the Inquirer package and also axios call is used for github user validation.
                  <br /><br />
                  Technologies Used : Node, Inquirer, Axios.

                </p>
              </div>
            </div>

            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={teamGenerator} className="card-img-top" alt="Team Generator" style={{width: "100%"}}></img>
              </div>

              <span className="card-title">Team Generator</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="9" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://github.com/YakiniA/10-OOP-TeamGenerator" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/YakiniA/10-OOP-TeamGenerator" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="9" style={{display: "none"}}>
                <span className="card-title">Team Generator</span>
                <button type="button" className="close" data-rel="9" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>
                  The purpose of this project is to build a Node CLI that takes in information about employees and
                  generates an HTML webpage that displays the collected details. This is
                  completely a Test-driven development(TDD) using Jest.
                  <br /><br />
                  Technologies Used : Node, Inquirer, Jest.

                </p>
              </div>
            </div>


            <div className="card" style={{width: 350}}>

              <div className="card-image">
                <img src={employeeTracker} className="card-img-top" alt="Team Generator"
                  style={{width: "100%", height:231}}></img>
              </div>

              <span className="card-title">Employee Tracker</span>

              <button type="button" className="btn btn-custom pull-right show-btn" data-rel="10" aria-label="Left Align">
                <i className="fa fa-ellipsis-v"></i>
              </button>

              <div className="card-action">
                <a href="https://github.com/YakiniA/12-MySQL-EmployeeTracker" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href="https://github.com/YakiniA/12-MySQL-EmployeeTracker" target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel="10" style={{display: "none"}}>
                <span className="card-title">Employee Tracker</span>
                <button type="button" className="close" data-rel="10" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">"×"</span></button>
                <p>
                  This purpose of this assignment is to build a CLI that provides solution for managing a company's
                  employees using node, inquirer, and MySQL.
                  <br /><br />
                  Technologies Used : Node, Inquirer, MySQL.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);
}
}

export default Portfolio;