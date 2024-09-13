import { NavLink } from 'react-router-dom';
import './Components.css';

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
              <img src='../assets/linkedIn-icon.png' alt='LinkedIn'/>
              <span className="icon-text">LinkedIn</span>
            </div>
          </a>
        </li>

        <li>
          <a href="https://github.com/ImPanyAngel" target="_blank" rel="noopener noreferrer">
            <div className="icon-container">
              <img src='../assets/github-icon.png' alt='GitHub'/>
              <span className="icon-text">GitHub</span>
            </div>
          </a>
        </li>

        <li>
          <a href="../assets/resume-draft.pdf" download="Panayiotis-Angelides-Resume.pdf">
            <div className="icon-container">
              <img src='../assets/resume-icon.jpg' alt='Resume'/>
              <span className="icon-text">Resume</span>
            </div>
          </a>
        </li>

      </ul>
      
    </nav>
  );
}

export default Navbar;
