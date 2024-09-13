import PropTypes from 'prop-types';
import './Components.css';
import { NavLink } from 'react-router-dom';

function Project({name, image}){
    
    return(
        <section className='project-section'>
            <NavLink to={`/${name}`}><img className='project-image' src={image} alt={name}/></NavLink>
            <NavLink to={`${name}`}><p className='project-name'>{name}</p></NavLink>
        </section>
    );
}

Project.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
}

export default Project;