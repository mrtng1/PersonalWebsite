import React from 'react';
import './SkillsComponent.css';
import '.././App.css';

function SkillsComponent() {
    return (
        <div>
            <div className="headerText disableUserSelect">My Skills </div>
            <div className="basicText">
            Java, JavaScript, TypeScript, Python, Angular, React...
            <br/>
            SQL Database, Git, Scrum
            </div>
        </div>
    );
}

export default SkillsComponent;