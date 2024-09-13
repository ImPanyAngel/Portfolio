import Navbar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Interest from "../components/Interest";
import "./Pages.css";

function About(){

    const interestCoding = {
        title: "I LOVE CREATING",
        description: "Coding is not just a skill for me but something I genuinely enjoy in my free time. I love turning ideas into real projects, whether it's building apps or experimenting with new technologies. The process of solving problems through code gives me a sense of accomplishment, and I’m always eager to learn more and refine my craft.",
        image: "src/assets/interest-creating-image.jpg"
    };

    const interestGames = {
        title: "I PLAY GAMES",
        description: "Gaming has been a passion of mine for as long as I can remember. I love exploring immersive storylines and creative gameplay, particularly in RPGs and strategy games. It’s a great way to unwind, and it often inspires my own development projects. Whether it's delving into a complex narrative or analyzing game mechanics, gaming sparks my creativity and keeps me motivated.",
        image: "src/assets/interest-games-image.png"
    };

    const interestFitness = {
        title: "I STAY ACTIVE",
        description: "Fitness is an essential part of my routine. I actively participate in sports like football and rugby, and I dedicate time to regular gym workouts. These activities not only help me stay physically fit but also keep my mind sharp, providing a healthy balance between my work in tech and staying active.",
        image: "src/assets/interest-fitness-image.png"
    };
    
    return(
        <>
        <Navbar/>
        <AboutMe/>
        <Interest title={interestCoding.title} description={interestCoding.description} image={interestCoding.image}/>
        <Interest title={interestGames.title} description={interestGames.description} image={interestGames.image}/>
        <Interest title={interestFitness.title} description={interestFitness.description} image={interestFitness.image}/>
        
        <hr className="section-divider"/>

        <section className="about-footer">
            <p className="about-footer-text">Feel free to contact me! I&rsquo;d love to collaborate and I am always happy to have a discussion.</p>
            <ul className="about-footer-nav">
                <li>
                    <a href="https://www.instagram.com/pany.angelides/" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/instagram-icon.png" alt="Instagram Icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/panayiotis-angelides-0bb802326/" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/linkedIn-icon-black.png" alt="LinkedIn Icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ImPanyAngel" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/github-icon.png" alt="GitHub Icon"/>
                    </a>
                </li>
            </ul>
            <button onClick={()  => window.location.href = 'mailto:angelides.pany04@gmail.com'} className="about-footer-button">
                EMAIL
            </button>
        </section>
        </>
       
    );
}

export default About;