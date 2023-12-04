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
import Blog from './assets/blog.png'
import Api from './assets/job-api.png'
import Joke from './assets/joke-generator.png'
import Rock from './assets/rock-paper-scissors.png'
import Tick from './assets/tic-tac-toe.png'

function App() {
  const [count, setCount] = useState(0)
  const [section,setSection] = useState("ABOUT ME")
  const [activeSection,setActiveSection] = useState('')

  const oldProjects = [
    {
        id:1,
        image:Birthday,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Build a birthday counter using html, css and javascript. It popups a message when the counter ends with beautiful songs played in background.",
        demo:"https://elegant-northcutt-d3e715.netlify.app/"
    },
    {
        id:2,
        image:Clone,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Build a responsive clone of the landing page of netflix.",
        demo:"https://lucid-bell-023fef.netlify.app/"
    },
    {
        id:3,
        image:Image,
        title:"Web development",
        languages:["html","css","javascript","fetch Api"],
        description:"while learning about fetch api, build this super easy project where user can find a random dog and cat image according to their use. ",
        demo:"https://lively-travesseiro-78a3d7.netlify.app/"
    },
   
    {
        id:6,
        image:Todo,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Build a todo list while learning important concepts of javascript.",
        demo:"https://affectionate-shirley-61eca2.netlify.app/"
    }
]


const recentProjects = [
    {
        id:7,
        image:Blog,
        title:"Web development",
        languages:["html","css","javascript","react","tailwind css"],
        description:"A personal blog website build using reactjs with all the functionality such as post, edit and delete.",
        demo:"https://react-blog-liard-seven.vercel.app/"
    },
    {
        id:8,
        image:Rock,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Build the rock paper scissors game using html, css, and javascript where user can enjoy the game against the computer.",
        demo:"https://rockpaperscissors-eta.vercel.app/"
    },
    {
        id:9,
        image:Api,
        title:"Web development",
        languages:["nodejs","express","mongodb"],
        description:"Build a job api using nodejs and express",
        demo:"https://vercel.com/raikiran07/job-api"
    },
    {
        id:10,
        image:Quiz,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Build a quiz game with all the required functionalities, such as timer, checking answer status, storing scores and high scores, and restart game.",
        demo:"https://infallible-pike-3b2a85.netlify.app/"
    },
    {
        id:11,
        image:Ludo,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Build a ludo game, where user can play against each other",
        demo:"https://optimistic-roentgen-809ddf.netlify.app/"
    },
    {
        id:12,
        image:Joke,
        title:"Web development",
        languages:["html","css","javascript"],
        description:"Random Joke Generator chrome extention build to provide random programming related jokes to users in a click",
        demo:"https://scintillating-custard-c99afa.netlify.app/"
    },
    {
        id:13,
        image:Tick,
        title:"Web development",
        languages:["html","css","javascript","react"],
        description:"Tic tak toe game",
        demo:"https://tic-tak-toe-six.vercel.app/"
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
      <Route exact path='/projects' element={<Projects recentProjects={recentProjects} oldProjects={oldProjects}/>} />
      <Route exact path='/skills' element={<Skill />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/resume' element={<Resume setSection={setSection} />} />
      <Route exact path={`/project/:id`} element={<ProjectPage recentProjects={recentProjects} oldProjects={oldProjects}/>} />
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
