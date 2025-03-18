import React from 'react'
import './Projects.css'
import project_data from '../../assets/project_data.js'
import arrow_forward from '../../assets/arrow_forward.svg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'


function Projects() {
  return (
    <div id="projects" className='myProjects'>
        <h1 className="title projects-title">MY WORK<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        <div className="project-container">
            {project_data.map((project, index)=>{
                return(
                <div key={index} className='project'>
                    <img  src={project.w_img} alt={project.w_name}/>
                    <div className='project_name'>{project.w_name}</div>
                    <p className="project-description">{project.w_disc}</p>
                    <div className='see-more'><a href={project.w_link} target="_blank" className="project-tile">See More</a><img className='arrow' src={arrow_forward} alt="" /></div>
                </div>

                    )
            })}
        </div>
            
    </div>
  )
}

export default Projects