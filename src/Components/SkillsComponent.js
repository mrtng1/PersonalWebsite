import React from 'react';
import './SendEmailComponent.css';
import '.././App.css';
import TechIcons from "../sources/image.shields";

function SkillsComponent() {
    return (
        <div>
            <div className="subHeaderText disableUserSelect">My Skills</div>
            <div className="skillsGrid">
                {/* JavaScript */}
                <div className="skillItem">
                    <img src={TechIcons.JAVASCRIPT} alt="JavaScript" />
                    JavaScript
                </div>
                {/* TypeScript */}
                <div className="skillItem">
                    <img src={TechIcons.TYPESCRIPT} alt="TypeScript" />
                    TypeScript
                </div>
                {/* C# */}
                <div className="skillItem">
                    <img src={TechIcons.CSHARP} alt="C#" />
                    C#
                </div>
                {/*.NET */}
                <div className="skillItem">
                    <img src={TechIcons.DOTNET} alt=".NET" />
                    .NET
                </div>
                {/* Java */}
                <div className="skillItem">
                    <img src={TechIcons.JAVA} alt="Java" />
                    Java
                </div>
                {/* Python */}
                <div className="skillItem">
                    <img src={TechIcons.PYTHON} alt="Python" />
                    Python
                </div>
                {/* Docker */}
                <div className="skillItem">
                    <img src={TechIcons.DOCKER} alt="Docker" />
                    Docker
                </div>
                {/* SonarQube */}
                <div className="skillItem">
                    <img src={TechIcons.SONARQUBE} alt="SonarQube" />
                    SonarQube
                </div>
                {/* Drone CI */}
                <div className="skillItem">
                    <img src={TechIcons.DRONE_CI} alt="Drone CI" />
                    Drone CI
                </div>
                {/* Kali Linux */}
                <div className="skillItem">
                    <img src={TechIcons.KALI_LINUX} alt="Kali Linux" />
                    Kali Linux
                </div>
                {/*Ubuntu */}
                <div className="skillItem">
                    <img src={TechIcons.UBUNTU} alt="Ubuntu" />
                    Ubuntu
                </div>
                {/* K6 Testing */}
                <div className="skillItem">
                    <img src={TechIcons.K6_TESTING} alt="K6 Testing" />
                    K6 Testing
                </div>
                {/* Unit Testing */}
                <div className="skillItem">
                    <img src={TechIcons.UNIT_TESTING} alt="Unit Testing" />
                    Unit Testing
                </div>
                {/* SQL */}
                <div className="skillItem">
                    <img src={TechIcons.SQL} alt="SQL" />
                    SQL
                </div>
                {/* Git */}
                <div className="skillItem">
                    <img src={TechIcons.GIT} alt="Git" />
                    Git
                </div>
                {/*Rest API */}
                <div className="skillItem">
                    <img src={TechIcons.API} alt="Rest API" />
                    Rest API
                </div>
                {/* Angular */}
                <div className="skillItem">
                    <img src={TechIcons.ANGULAR} alt="Angular" />
                    Angular
                </div>
                {/* React */}
                <div className="skillItem">
                    <img src={TechIcons.REACT} alt="React" />
                    React
                </div>
                {/*Blazor */}
                <div className="skillItem">
                    <img src={TechIcons.BLAZOR} alt="Blazor" />
                    Blazor
                </div>
                {/*Scrum */}
                <div className="skillItem">
                    <img src={TechIcons.SCRUM} alt="Scrum" />
                    Scrum
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;
