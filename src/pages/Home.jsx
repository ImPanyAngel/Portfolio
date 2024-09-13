import Navbar from "../components/NavBar";
import Project from "../components/Project";

function Home(){
    
    return(
        <>
        <Navbar/>
        <h1 className="home-title">Hello, I&rsquo;m Pany. Student at University of Leicester, with a passion for creating, learning, and exploring new ideas.</h1>
        <Project name={"MoneyManager"} image={'../assets/money-manager-intro.png'}/>
        </>
    );
}

export default Home;