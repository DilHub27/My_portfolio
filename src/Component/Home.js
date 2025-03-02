import React from 'react'
import './Home.css'
import {NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    
    <header class="header">

   <p  class="logo"> DILSHAN</p>




<nav class="navebar">

  <NavLink to ='/HomePage' > <p> Home</p></NavLink> 
  <NavLink to ='/AboutPage' > <p>About </p></NavLink>
  <NavLink to ='/EducationalPage'> <p>Education </p></NavLink>
  <NavLink to ='/SkillsPage' > <p>Skills</p></NavLink>
  <NavLink to ='/ContactPage'> <p >Contact </p></NavLink>
</nav>




   </header>
   
   
      
    </div>
   
  )
}
