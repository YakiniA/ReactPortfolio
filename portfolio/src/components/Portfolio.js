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
import projects from "../projects.json";
import Projects from './Projects';
import $ from 'jquery';

class Portfolio extends Component{

  state = {
   
    img : [fightClub, spaceExploration, codingQuiz, weatherDashboard, workScheduler, burgerAppln, noteTaker, readMeGenerator, teamGenerator, employeeTracker],
    projects
  };

  componentDidMount(){
    $('.list-group-item').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
    });

    $('.show-btn').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });
  }

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
                
                    ${this.state.projects.map(project => (             
                      <Projects 
                          image = {this.state.img.map(i => i)}
                          id = {project.id}
                          title= {project.title}
                          href = {project.href}
                          description = {project.description}
                          technologies = {project.technologies}            
                      />
                    
                ))}
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