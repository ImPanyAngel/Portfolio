import Navbar from "../components/NavBar";
import ProjectFooter from "../components/ProjectFooter";
import { projectsArray } from "../components/projects-array";
import "./Pages.css";

function MoneyManager(){
    return(
        <>
        <Navbar/>

        <section>
            <h1 className="money-manager-title">MoneyManager</h1>
            <p className="money-manager-intro">My experience designing and creating my first mobile application.</p>
            <img src="src/assets/money-manager-image.png" alt="project-image" className="money-manager-project-image"/>
        </section>

        <hr className="section-divider"/>

        <section>
            <h2 className="section-title">Project Overview</h2>
            <div className="section-text">
                <p>
                    I wanted to create a mobile application to solve a problem I encountered as an international student. While many similar apps exist, my research revealed that none focused purely on organization.
                </p>
                <p>
                    Inspired by this, I decided to develop an app to manually organize the banks and subscriptions an individual may have. You can explore the full codebase for this project on <a href="https://github.com/ImPanyAngel/MoneyManager" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
                <h3>Key Features</h3>
                <ul>
                    <li>Track income and expenses</li>
                    <li>Track subscriptions</li>
                    <li>Currency conversion between EUR and GBP</li>
                </ul>

                <h3>Technologies Used</h3>
                <ul>
                    <li>Android Studio</li>
                    <li><a href="https://www.exchangerate-api.com/" target="_blank" rel="noopener noreferrer">Exchange Rate API</a></li>
                </ul>
            </div>
        </section>

        <hr className="section-divider"/>

        <section>
            <h2 className="section-title">Inital Design</h2>
            <p>I began by sketching a basic layout for the UI to get a visual sense of the app&rsquo;s structure. Early on, I realized the app would need at least two main pages to effectively organize the features I had in mind. This initial sketch allowed me to outline key elements and interactions, helping to refine the app&rsquo;s functionality and flow before diving into development.</p>
            <img src="src/assets/money-manager-inital-sketch.jpeg" alt="skecth-image" className="money-manager-sketch-image"/>
        </section>

        <hr className="section-divider"/>

        <section className="improvements-section">
            <h2 className="section-title">Improvements to be made</h2>
            <h3>Code Enhancements</h3>
            <ul>
                <li>Commenting the Code: Add detailed comments to improve understanding.</li>
                <li>Code Readability: Refactor variable and class names for clarity.</li>
                <li>Use of Generics: Combine similar classes by utilizing generics.</li>
            </ul>

            <h3>Application Enhancements</h3>
            <ul>
                <li>Currency Flexibility: Allow users to change the currency of their total money.</li>
                <li>Number Formatting: Implement automatic formatting for large numbers (e.g., &ldquo;1000&ldquo; becomes &ldquo;1,000&ldquo;).</li>
                <li>External Database Integration: Use a lightweight database (e.g., SQLite, MySQL) for storing data.</li>
                <li>UI Reordering: Enable users to reorder objects within the UI for a more customizable experience.</li>
            </ul>
        </section>

        <hr className="section-divider"/>

        <ProjectFooter projects={projectsArray}/>
        </>
    );
}

export default MoneyManager;