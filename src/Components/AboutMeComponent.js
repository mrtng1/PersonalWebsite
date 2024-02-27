import React from 'react';
import '.././App.css';

function AboutMeComponent() {
    return (
        <div>
            <div className="subHeaderText disableUserSelect">About Me</div>
            <ul className="basicText">
                <li>Computer Science Student from Bratislava, Slovakia.</li> <br></br>
                <li>Specialize in Back-End and Front-End Development; studying DevOps and Cyber-security, with CCNA1 certification.</li> <br></br>
                <li>Expanding skills into C# and web development with React & Angular, balancing multiple projects with proven leadership in team environments.</li> <br></br>
                <li>Strengths: dedication, reliability, teamwork, and commitment to high-quality software with a focus on web security and agile practices.</li> <br></br>
                <li>Eager to connect, contribute, and continuously learn and innovate in web technologies.</li> <br></br>
            </ul>
        </div>
    );
}

export default AboutMeComponent;