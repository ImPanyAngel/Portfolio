import './Components.css';

function AboutMe(){

    return(
        <section className="about-me-section">
            <img src="./https://via.placeholder.com/400" alt="Profile" className='about-me-profile'/>
            <div className='about-me-text'>
                <h2 className='about-me-title'>THIS IS ME!</h2>
                <p className='about-me-description'>I&rsquo;m Panayiotis Angelides, a Computer Science student passionate about both software and game development. I have hands-on experience through personal and educational projects, and I&rsquo;m always eager to explore new technologies. Whether it&rsquo;s building intuitive user interfaces or solving complex problems, I&rsquo;m driven by the challenge of creating meaningful digital experiences.</p>
                <p className='about-me-description'>Beyond academics and coding, I value creativity and expression in everything I do. My personal projects and interests reflect who I am, allowing me to merge passion with purpose.</p>
            </div>
        </section>
    );
}

export default AboutMe;