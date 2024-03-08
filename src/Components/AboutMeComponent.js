import React from 'react';
import '.././App.css';

function AboutMeComponent() {
    return (
        <div>
            <div className="subHeaderText disableUserSelect">About Me</div>
            <ul className="basicText">
                <li>Studying Computer Science in Slovakia, focusing on software development and web technologies.</li>
                <br></br>
                <li>Familiar with Back-End, Front-End, DevOps, and Cyber-security.</li>
                <br></br>
                <li>Preferred Front-End Frameworks, React, Vue and Angular and the basics of Blazor</li>
                <br></br>
                <li>Holder of a CCNA1 networking certificate; dedicated to learning about security in software development.</li>
                <br></br>
                <li>Languages i Speak: Danish, English, Slovak, Czech, and German.</li>
                <br></br>
                <li>Eager to continuously learn and explore innovations in web technologies.</li>
            </ul>
        </div>
    );
}

export default AboutMeComponent;