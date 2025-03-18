import React from 'react'
import './Skills.css'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'

function Skills() {
  return (

    <div id="skills">
      <div className="skills-container">
        <h1 className="title skils-title">SKILLS<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        <div className="skill-sentense">
        <p>I LOVE<br/><span className="italic"> CREATING</span><br/> THE WORLD</p>
        </div>

        <div className="skill-items-box">
            <div className="top-skills">
                <h2 className="skill_heading">Top Skills</h2>
                <ul>
                    <li>- HTML</li>
                    <li>- CSS</li>
                    <li>- JavaScript</li>
                </ul>
            </div>
            <div className="technologies">
                <h2 className="skill_heading">Technologies</h2>
                <ul>
                    <li>- PHP</li>
                    <li>- Python</li>
                    <li>- Java</li>
                    <li>- Oracle SQL</li>
                    <li>- PL/SQL</li>
                    <li>- C++</li>
                    <li>- C#</li>
                </ul>
            </div>
            <div className="tools">
                <h2 className="skill_heading">Tools</h2>
                <ul>
                    <li>- Wordpress</li>
                    <li>- Apache</li>
                    <li>- MySQL</li>
                    <li>- Oracle SQL Developer</li>
                    <li>- Visual Studio Code</li>
                    <li>- Git/GitHub</li>
                    <li>- Microsoft suite</li>
                </ul>
            </div>
            <div className="languages">
                <h2 className="skill_heading">Languages</h2>
                <ul>
                    <li>English</li>
                    <li>Japanese</li>
                </ul>
            </div>
            <div className="other">
                <h2 className="skill_heading">Other</h2>
                <ul>
                    <li>- ArcGIS</li>
                    <li>- AutoCAD</li>
                    <li>- Revit</li>
                </ul>
            </div>
        </div>
      </div>

    </div>

  )
}

export default Skills