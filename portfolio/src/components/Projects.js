import React from 'react'

 

export default function Projects(props) {


  console.log(props);
    return (
        <div>    
            <div className="card" style={{width: 350}}>
              <div className="card-image">
             
                   <img src={props.image} className="card-img-top" alt="Fight club" style={{width: "100%"}}></img>
            
                </div>

              <div className="card-content">
                <span className="card-title">{props.title}</span>

                <button type="button" className="btn btn-custom pull-right show-btn" data-rel={props.id} aria-label="Left Align">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
              </div>

              <div className="card-action">
                <a href={props.href} target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Online" className="btn btn-info btn-lg mr-3">
                  <i className="fa fa-external-link"></i>
                </a>
                <a href={props.href} target="_blank" data-toggle="tooltip"
                  data-placement="top" title="View Source" className="btn btn-info btn-lg ">
                  <i className="fa fa-github"></i>
                </a>
              </div>

              <div className="card-reveal" data-rel={props.id} style={{display: "none"}}>
                <span className="card-title">{props.title}</span>
                <button type="button" className="close" data-rel={props.id} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <p>{props.description}<br /><br />
                 {props.technologies}
                </p>
              </div>
            </div>
        </div>
       
  
    )
}
