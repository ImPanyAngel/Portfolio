import Navbar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter";
import "./Pages.css";

import passwordManagerImage from '../assets/password-manager-image.png';
import passwordManagerSketch1 from '../assets/password-manager-sketch1.jpg';
import passwordManagerSketch2 from '../assets/password-manager-sketch2.jpg';
import passwordManagerSketch3 from '../assets/password-manager-sketch3.jpg';


function PasswordManager() {

    return(
        <>
        <Navbar />

        <section className="project-intro-container">
            <h1 className="project-title">ProjectManager</h1>
            <p className="project-intro">My journey into secure desktop application development with a focus on data privacy and encryption.</p>
            <img src={passwordManagerImage} alt="project-image" className="password-project-page-image"/>
        </section>

        <hr className="section-divider"/>

        <section>
            <h2 className="section-title">Project Overview</h2>
            <div className="section-text">
                <p>
                    I aimed to create a secure and efficient password manager for desktop that offers local, encrypted storage for user credentials. Unlike many web-based alternatives, this project prioritizes offline access and user-controlled data.
                </p>
                <p>
                    This project helped me gain hands-on experience with secure data handling and encryption. You can explore the full codebase for this project on <a href="https://github.com/ImPanyAngel/PasswordManager" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </p>
                <h3>Key Features</h3>
                <ul>
                    <li>Secure local storage with AES-256 encryption for passwords</li>
                    <li>Master password protection with Argon2 hashing for secure access</li>
                    <li>Automatic clipboard clearing after password copy to enhance security</li>
                </ul>

                <h3>Technologies Used</h3>
                <ul>
                    <li><a href="https://tauri.app/" target="_blank" rel="noopener noreferrer">Tauri</a> for desktop application development</li>
                    <li><a href="https://docs.rs/aes-gcm/latest/aes_gcm/" target="_blank" rel="noopener noreferrer">AES-GCM</a> for encryption</li>
                    <li><a href="https://docs.rs/argon2/latest/argon2/" target="_blank" rel="noopener noreferrer">Argon2</a> for password hashing</li>
                    <li>SQLite for local database management</li>
                </ul>
            </div>
        </section>


        <hr className="section-divider"/>

        <section>
        <h2 className="section-title">Initial Design</h2>
        <p>I started by sketching a simple UI layout to visualize the core structure of the password manager. Early in the design process, I recognized the need for three main sections: a secure entry page, a dashboard for managing stored credentials, and a password creation page. This initial sketch helped me organize essential elements and interactions, refining the app&rsquo;s flow and functionality before moving into development.</p>
            <img src={passwordManagerSketch3} alt="skecth-image" className="project-sketch-image"/>
            <div className="sketch-container">
                <img src={passwordManagerSketch1} alt="skecth-image" className="project-sketch-image"/>
                <img src={passwordManagerSketch2} alt="skecth-image" className="project-sketch-image"/>
            </div>
        </section>

        <hr className="section-divider"/>

        <section className="improvements-section">
            <h2 className="section-title">Improvements to be made</h2>
            <h3>Application Enhancements</h3>
            <ul>
                <li>Enhance display fluidity for a smoother, more responsive user experience.</li>
                <li>Introduce an auto-lock feature that secures the app after periods of inactivity, ideal for prolonged use.</li>
                <li>Include an option for free-text accounts for flexible entry and management.</li>
                <li>Sign code in accordance with macOS guidelines to enable secure sharing.</li>
            </ul>
        </section>

        <ProjectFooter />
        </>
    );
}

export default PasswordManager;
