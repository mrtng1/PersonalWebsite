import React from 'react';
import '.././App.css';

function IntroComponent() {
    return (
        <div className="headerSection">
            <p className="headerText disableUserSelect">Martin Grulyo</p>
            <div className="aboutMe disableUserSelect">
                <ul>
                    <li>CS Student, Originally from Slovakia</li> <br></br>
                    <li>My Front-End Frameworks: React, Vue, Angular, Blazor</li> <br></br>
                    <li>TechStack: C# .NET, Java, JavaScript and TypeScript, Python</li> <br></br>
                    <li>Languages: Danish, English, Slovak, Czech, German</li> <br></br>
                    <li>Other Interests: DevOps & Cybersecurity</li> <br></br>
                    <li>Loves innovation and teamwork</li>
                </ul>
            </div>
        </div>
    );
}

export default IntroComponent