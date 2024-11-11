import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { projectsArray } from "../components/projects-array";
import './Components.css';

function ProjectFooter() {
  return (
    <footer className='projects-footer'>
        <ul>
            <li>
                <NavLink to="/">All</NavLink>
            </li>

            {projectsArray.map((project, index) => (
                <li key={index}>
                    <NavLink style={({ isActive }) => isActive ? {color:'black'} : {}} to={`/${project}`}>{project}</NavLink>
                </li>
            ))}
        </ul>
    </footer>
  );
}

ProjectFooter.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectFooter;
