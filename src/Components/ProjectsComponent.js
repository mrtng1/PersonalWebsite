import React from 'react';
import './Projects.css';
import TechIcons from '../sources/image.shields.js';

function ProjectsComponent() {

    const projectsData = [
        {
            title: 'Craft Burger Web',
            description: 'FullStack Web Application for displaying a menu from a restaurant, alongside a useful admin view for managing the whole website.',
            repoLink: 'https://github.com/mrtng1/CraftBurger-Web',
            techStack: [TechIcons.JAVASCRIPT, TechIcons.TYPESCRIPT, TechIcons.ANGULAR, TechIcons.SQL, TechIcons.CSHARP]
        },
        {
            title: 'WUAV Documentation Software',
            description: 'Desktop Application made in Java for creating and storing documentation for Audio/Visual Solutions. Winner of the Best Software in the CSe2022 class.',
            repoLink: 'https://github.com/tomdra01/WUAV-Software',
            techStack: [TechIcons.JAVA, TechIcons.SQL]
        },
        {
            title: 'Movie Library',
            description: 'Creating a simple, yet eye-catching UI with an API that retrieves posters for each movie from a sizeable database.',
            repoLink: 'https://github.com/mrtng1/Movie-Library',
            techStack: [TechIcons.JAVA, TechIcons.CSS, TechIcons.API]
        },
        {
            title: '.NET Calculator',
            description: 'A simple console program with a CI pipeline integration, SonarQube scanning and Drone CI, Docker integration.',
            repoLink: 'https://github.com/mrtng1/CalculatorWithDb',
            techStack: [TechIcons.CSHARP, TechIcons.DOCKER, TechIcons.SONARQUBE, TechIcons.DRONE_CI]
        }
    ];

    return (
        <div>
            <div className="subHeaderText disableUserSelect">My Projects</div>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.repoLink} className="repo-button">Repository</a>
                        <div className="tech-stack">
                            {project.techStack.map((tech, techIndex) => (
                                <img key={techIndex} src={tech} alt={tech.split('/').pop().split('.')[0]} className="tech-icon" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponent;
