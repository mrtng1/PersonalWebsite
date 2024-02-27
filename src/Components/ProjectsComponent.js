import React from 'react';
import './Projects.css';
import TechIcons from '../sources/image.shields.js';

function ProjectsComponent() {
    return (
        <div>
            <div className="subHeaderText disableUserSelect">My Projects</div>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Craft Burger Web</h3>
                    <p>FullStack Web Application for displaying a menu from a restaurant, alongside a useful admin view for managing the whole website.</p>
                    <a href="https://github.com/mrtng1/CraftBurger-Web" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src={TechIcons.JAVASCRIPT} alt="JavaScript" className="tech-icon"/>
                        <img src={TechIcons.TYPESCRIPT} alt="TypeScript" className="tech-icon"/>
                        <img src={TechIcons.ANGULAR} alt="Angular" className="tech-icon"/>
                        <img src={TechIcons.SQL} alt="SQL" />
                        <img src={TechIcons.CSHARP} alt="C#" />
                    </div>
                </div>

                <div className="project-card">
                    <h3>WUAV Documentation Software</h3>
                    <p>Desktop Application made in Java for creating and storing documentation for Audio/Visual Solutions. Winner of the Best Software in the CSe2022 class.</p>
                    <a href="https://github.com/tomdra01/WUAV-Software" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src={TechIcons.JAVA} alt="Java" />
                        <img src={TechIcons.SQL} alt="SQL" />
                    </div>
                </div>

                <div className="project-card">
                    <h3>Movie Library</h3>
                    <p>Creating a simple, yet eye-catching UI with an API that retrieves posters for each movie from a sizeable database.</p>
                    <a href="https://github.com/mrtng1/Movie-Library" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src={TechIcons.JAVA} alt="Java" />
                        <img src={TechIcons.CSS} alt="CSS" />
                        <img src={TechIcons.API} alt="API" />

                    </div>
                </div>

                <div className="project-card">
                    <h3>.NET Calculator</h3>
                    <p>A simple console program with a CI pipeline integration, SonarQube scanning and Drone CI, Docker integration.</p>
                    <a href="https://github.com/mrtng1/CalculatorWithDb" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src={TechIcons.CSHARP} alt="C#" />
                        <img src={TechIcons.DOCKER} alt="Docker" />
                        <img src={TechIcons.SONARQUBE} alt="SonarQube" />
                        <img src={TechIcons.DRONE_CI} alt="Drone CI" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsComponent;
