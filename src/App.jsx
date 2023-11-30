import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes,Route,useNavigate} from 'react-router-dom'

import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './Components/AboutMe'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import ProjectPage from './Components/ProjectPage'
import Skill from './Components/Skills'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import NotFound from './Components/NotFound'
import Birthday from './assets/birthday.png'
import Clone from './assets/clone.png'
import Image from './assets/image.png'
import Quiz from './assets/quiz.png'
import Ludo from './assets/ludo.png'
import Todo from './assets/todo.png'

function App() {
  const [count, setCount] = useState(0)
  const [section,setSection] = useState("ABOUT ME")
  const [activeSection,setActiveSection] = useState('')

  const recentProjects = [
    {
        id:1,
        image:Birthday,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:2,
        image:Clone,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:3,
        image:Image,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:4,
        image:Quiz,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:5,
        image:Ludo,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:6,
        image:Todo,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    },
    {
        id:7,
        image:Birthday,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea.",
        demo:"link"
    }
]

  return (
    <div className="main-container   relative min-h-screen">
     <h1 className="header text-center">
     </h1>
     <div className="nav-section">
     <p className="text-center">
      {
        section
      }
     </p>
     <hr className="hr"></hr>
     </div>
     <Routes>
      <Route exact path='/' element={<AboutMe />} />
      <Route exact path='/projects' element={<Projects recentProjects={recentProjects}/>} />
      <Route exact path='/skills' element={<Skill />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/resume' element={<Resume setSection={setSection} />} />
      <Route exact path={`/project/:id`} element={<ProjectPage recentProjects={recentProjects}/>} />
      <Route exact path='/*' element={<NotFound />} />
     </Routes>

     
    
     <Navbar 
     section={section}
     setSection={setSection}
      />

    
     
 
     </div>
  )
}

export default App
