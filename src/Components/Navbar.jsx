import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({section,setSection}) => {

  function setSectionName(btn){
    console.log(btn.innerText)
    setSection(btn.innerText)
  }


  return (
    <navbar className="navbar  absolute bottom-0  flex items-center justify-center p-5">
    <ul className="flex items-center justify-center gap-6">
      <li>
        <Link to='/'>
        <button className="border nav-text" onClick={(e)=>setSectionName(e.target)}>
          ABOUT ME
        </button>
        </Link>
       
      </li>
      <li>
        <Link to='/projects'>
        <button className="border nav-text" onClick={(e)=>setSectionName(e.target)}>
          PROJECTS
        </button>
        </Link>
        
      </li>
      <li>
        <Link to='/skills'>
        <button className="border nav-text" onClick={(e)=>setSectionName(e.target)}>
          SKILLS
        </button>
        </Link>
        
      </li>
      <li>
        <Link to='/contact'>
        <button className="border nav-text" onClick={(e)=>setSectionName(e.target)}>
          CONTACT
        </button>
        </Link>
       
      </li>
      
    </ul>
   </navbar>
  )
}

export default Navbar