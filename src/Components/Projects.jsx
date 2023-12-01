import React from 'react'

import {Link} from 'react-router-dom'
import ProjectPage from './ProjectPage'

const Projects = ({recentProjects}) => {
    
  return (
    <div className="page project-container border rounded-lg  mx-auto">
        <div className="project-section">
            <p className="project-title">
                Recent Projects
            </p>
            <div className="container">
                {
                    recentProjects.map(project=>{
                        return(
                            <div className="project" key={project.id}>
                                <Link to={`/project/${project.id}`} element={<ProjectPage 
                                recentProjects={recentProjects}
                                />}>
                                <img src={project.image} alt="project image" />
                                </Link>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="project-section">
            <p className="project-title">
                Old Projects
            </p>
            <div className="container">
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
            </div>
        </div>
    </div>
  )
}

export default Projects