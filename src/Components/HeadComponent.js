import React from 'react';
import '.././App.css';

function HeadComponent() {
    return (
        <div className="headerSection">
            <p className="headerText disableUserSelect">Martin Grulyo</p>
            <div className="aboutMe disableUserSelect">
                Computer Science student with a specialization in Full Stack Development, DevOps, and Cybersecurity
                <br></br>
                <br></br>
                Studying in Esbjerg, Denmark
                <br></br>
                <br></br>
                Proficient in Java, TypeScript, JavaScript, Python, SQL, C#, Angular, React
                <br></br>
                Docker, SonarQube, Drone CI and others.
                <br></br>
                <br></br>
                Experienced in creating responsive UIs, managing SQL databases, applying Scrum methodologies, and ensuring software and cyber security.
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default HeadComponent