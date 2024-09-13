import PropTypes from 'prop-types';
import './Components.css';

function Interest({title, description, image}){

    return(
        <section className='interest-section'>
            <div className='interest-text'>
                <h2 className='interest-title'>{title}</h2>
                <p className='interest-description'>{description}</p>
            </div>
            <img src={image} alt='Interest Image' className='interest-image'/>
        </section>
    );
}

Interest.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Interest;