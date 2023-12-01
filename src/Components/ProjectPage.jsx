import React from 'react'
import Project from '../assets/project.jpg'
import {useParams,Link} from 'react-router-dom'
import Birthday from '../assets/birthday.png'
import Live from '../assets/click-unscreen.gif'

const ProjectPage = ({recentProjects}) => {
  console.log(recentProjects)
  const {id} = useParams()
  const [currentProject] = recentProjects.filter(project=>project.id==id)
  console.log(currentProject)
  const {languages,description,demo} = currentProject
  
  return (
    <div className="page project-page max-w-sm mx-auto border rounded-lg overflow-hidden relative md:p-5">
        <div className="image-container rounded-md">
        <img src={`..${currentProject.image}`} alt="project image" />
        
        </div>
        <div className="link-tag flex items-center justify-center text-sm p-2 rounded-full">
          <a href="#">
            <span>Live</span>
          </a>
          <img src={Live} alt="click gif" className="gif" />
        </div>
        <h3 className="pl-2 pt-2 language-title">Languages used</h3>
        <div className="languages-used p-2">
          {
            languages.map(language=>{
              return (
                <span className="language  flex items-center justify-center text-xs">{language}</span>
              )
            })
          }
           
            
        </div>

        <div className="project-text p-3 section-text text-sm">
           {
            description
           }
        </div>
        <Link to="/projects">
        <button className="close-btn">
            CLOSE
        </button>
        </Link>
       

        


    </div>
  )
}

export default ProjectPage