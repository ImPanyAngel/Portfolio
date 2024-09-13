import PropTypes from 'prop-types';
import './Components.css';
import { NavLink } from 'react-router-dom';

function ProjectFooter({ projects }) {
  return (
    <footer className='projects-footer'>
        <ul>
            <li>
                <NavLink to="/">All</NavLink>
            </li>
            
            {projects.map((project, index) => (
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
