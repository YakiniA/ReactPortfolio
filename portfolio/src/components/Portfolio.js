import React, { useState, useEffect } from "react";
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
import _ from 'lodash';

function Portfolio() {

  const [projectsInfo] = useState({
    projects,
    portfolioImg: [fightClub, spaceExploration, codingQuiz, weatherDashboard, workScheduler, burgerAppln, noteTaker, readMeGenerator, teamGenerator, employeeTracker]
  });

  useEffect(() => {
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
  }, [])



  return (
    <div>
      <div id="portfolio">
        <div className="projects padding">
          <div className="container">
            <div className="row">
              <header className="text-center mt-5">
                <h2 className="text-center proj">Projects</h2>
              </header>
            </div>
            <br />
            <br />

            <div className="text-center">
              <div className="row">

                {_.zip(projectsInfo.projects, projectsInfo.portfolioImg).map(value => (
                  <Projects key={value[0].id}
                    image={value[1]}
                    id={value[0].id}
                    title={value[0].title}
                    href={value[0].href}
                    source = {value[0].source}
                    description={value[0].description}
                    technologies={value[0].technologies}
                  />
                )
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;