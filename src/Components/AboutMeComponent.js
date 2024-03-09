import React from 'react';
import '.././App.css';
import headshot from '../sources/headshot.png';

function AboutMeComponent() {
    return (
        <div className="aboutMeContainer">
            <div className="subHeaderText disableUserSelect">About Me</div>
            <div className="aboutMeContent">
                <ul className="basicText">
                <li>Studying Computer Science in Esbjerg, focusing on software development and web technologies.</li>
                <br></br>
                <li>Familiar with Back-End, Front-End, DevOps, and Cyber-security.</li>
                <br></br>
                <li>Preferred Front-End Frameworks, React, Vue and Angular and the basics of Blazor</li>
                <br></br>
                <li>Holder of the CCNA1 networking certificate; dedicated to learning about security in software development.</li>
                <br></br>
                <li>Languages i Speak: Danish, English, Slovak, Czech, and German.</li>
                <br></br>
                <li>Eager to continuously learn and explore innovations in web technologies.</li>
            </ul>
            <img src={headshot} alt="Martin Grulyo" className="headshot" />
        </div>
        </div>
    );
}

export default AboutMeComponent;