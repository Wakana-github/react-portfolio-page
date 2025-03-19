import React from 'react'
import { useState, useEffect } from 'react'
import './Projects.css'
import project_data from '../../assets/project_data.js'
import arrow_forward from '../../assets/arrow_forward.svg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'
import double_arrow_up from '../../assets/double_arrow_up.svg'
import double_arrow_down from '../../assets/double_arrow_down.svg'


function Projects() {

    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedProjects = isMobileView && !showAllProjects ? project_data.slice(0, 6) : project_data;

  return (
    <div id="projects" className='myProjects'>
        <h1 className="title projects-title">MY WORK<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        <div className="project-container">
            {displayedProjects.map((project, index)=>{
                return(
                <div key={index} className='project'>
                    <img  src={project.w_img} alt={project.w_name}/>
                    <div className='project_name'>{project.w_name}</div>
                    <p className="project-description">{project.w_disc}</p>
                    <a href={project.w_link} target="_blank" className="project-tile"><div className='see-more'>See More<img className='arrow' src={arrow_forward} alt="" /></div></a>
                </div>

                    )
            })}
        </div>
             {isMobileView && (
                <button className="read-more-btn" onClick={() => setShowAllProjects(prevState => !prevState)}>
                  {showAllProjects ? <span>Hide Projects<img className='read-more-icon' src={double_arrow_up}/></span> : <span>Read More<img src={double_arrow_down} className='read-more-icon'/></span>}
                </button>
             )}
    </div>
  )
}

export default Projects