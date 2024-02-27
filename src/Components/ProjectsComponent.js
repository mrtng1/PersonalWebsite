import React from 'react';
import '../App.css';

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
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" className="tech-icon"/>
                        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" className="tech-icon"/>
                        <img src="https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" className="tech-icon"/>
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=sqlite&logoColor=white" alt="SQL" />
                    </div>
                </div>

                <div className="project-card">
                    <h3>WUAV Documentation Software</h3>
                    <p>Desktop Application made in Java for creating and storing documentation for Audio/Visual Solutions. Winner of the Best Software in the CSe2022 class.</p>
                    <a href="https://github.com/tomdra01/WUAV-Software" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=sqlite&logoColor=white" alt="SQL" />
                    </div>
                </div>

                <div className="project-card">
                    <h3>Movie Library</h3>
                    <p>Creating a simple, yet eye-catching UI with an API that retrieves posters for each movie from a sizeable database.</p>
                    <a href="https://github.com/mrtng1/Movie-Library" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white" alt="Java" />
                        <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS" />
                        <img src="https://img.shields.io/badge/API-FFA500?style=flat-square&logo=cloud&logoColor=white" alt="API" />

                    </div>
                </div>

                <div className="project-card">
                    <h3>.NET Calculator</h3>
                    <p>A simple console program with a CI pipeline integration, SonarQube scanning and Drone CI, Docker integration.</p>
                    <a href="https://github.com/mrtng1/Movie-Library" className="repo-button">Repository</a>
                    <div className="tech-stack">
                        <img src="https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white" alt="C#" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
                        <img src="https://img.shields.io/badge/SonarQube-4E9BCD?style=flat-square&logo=sonarqube&logoColor=white" alt="SonarQube" />
                        <img src="https://img.shields.io/badge/Drone_CI-212121?style=flat-square&logo=drone&logoColor=white" alt="Drone CI" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectsComponent;
