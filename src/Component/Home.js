import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import CloseIcon from '@mui/icons-material/Close';
import './Home.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
     
      <header className="header">
        <p className="logo">DILSHAN</p>

      
        <nav className="navbar">
          <NavLink to="/HomePage"> <p>Home</p></NavLink>
          <NavLink to="/AboutPage"> <p>About</p></NavLink>
          <NavLink to="/EducationalPage"> <p>Education</p></NavLink>
          <NavLink to="/SkillsPage"> <p>Skills</p></NavLink>
          <NavLink to="/ContactPage"> <p>Contact</p></NavLink>
        </nav>

     
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <DehazeSharpIcon />}
        </div>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/HomePage" onClick={() => setMenuOpen(false)}> <p>Home</p></NavLink>
        <NavLink to="/AboutPage" onClick={() => setMenuOpen(false)}> <p>About</p></NavLink>
        <NavLink to="/EducationalPage" onClick={() => setMenuOpen(false)}> <p>Education</p></NavLink>
        <NavLink to="/SkillsPage" onClick={() => setMenuOpen(false)}> <p>Skills</p></NavLink>
        <NavLink to="/ContactPage" onClick={() => setMenuOpen(false)}> <p>Contact</p></NavLink>
      </nav>
    </div>
  );
}
