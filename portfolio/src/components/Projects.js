import React from 'react'

export default function Projects() {
    return (
        <div>
            
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
                  <span aria-hidden="true">×</span></button>
                <p>Real time gaming app where two users can fight with each other, and at the end of the game displays
                  their scores.<br /><br />
                  Technologies Used : Node, Express, SocketIO, MySQL, Handlebars

                </p>
              </div>
            </div>

        </div>
    )
}
