import { NavLink } from 'react-router-dom';
import './Components.css';

import linkedInIcon from '../assets/linkedIn-icon.png';
import githubIcon from '../assets/github-icon.png';
import resumeIcon from '../assets/resume-icon.jpg';
import resumePDF from '../assets/resume-draft.pdf';

function Navbar() {
  return (
    <nav>

      <ul className="left-nav">
        <li><NavLink to="/">PANAYIOTIS ANGELIDES</NavLink></li>
      </ul>

      <ul className="right-nav">

        <li><NavLink style={({ isActive }) => isActive ? {color:'black'} : {}} to="/">Home</NavLink></li>
        <li><NavLink style={({ isActive }) => isActive ? {color:'black'} : {}} to="/About">About</NavLink></li>

        <li>
          <a href="https://www.linkedin.com/in/panayiotis-angelides-0bb802326/" target="_blank" rel="noopener noreferrer">
            <div className="icon-container">
              <img src={linkedInIcon} alt='LinkedIn'/>
              <span className="icon-text">LinkedIn</span>
            </div>
          </a>
        </li>

        <li>
          <a href="https://github.com/ImPanyAngel" target="_blank" rel="noopener noreferrer">
            <div className="icon-container">
              <img src={githubIcon} alt='GitHub'/>
              <span className="icon-text">GitHub</span>
            </div>
          </a>
        </li>

        <li>
          <a href={resumePDF} download="Panayiotis-Angelides-Resume.pdf">
            <div className="icon-container">
              <img src={resumeIcon} alt='Resume'/>
              <span className="icon-text">Resume</span>
            </div>
          </a>
        </li>

      </ul>
      
    </nav>
  );
}

export default Navbar;
