import React from 'react';
import './SendEmailComponent.css';
import '.././App.css';
import TechIcons from "../sources/image.shields";

function SkillsComponent() {
    const navigateTo = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <div className="subHeaderText disableUserSelect">My Skills</div>
            <div className="skillsGrid">
                {/* JavaScript */}
                <div className="skillItem" onClick={() => navigateTo('https://www.javascript.com')}>
                    <img src={TechIcons.JAVASCRIPT} alt="JavaScript"/>
                    JavaScript
                </div>
                {/* TypeScript */}
                <div className="skillItem" onClick={() => navigateTo('https://www.typescriptlang.org/')}>
                    <img src={TechIcons.TYPESCRIPT} alt="TypeScript"/>
                    TypeScript
                </div>
                {/* C# */}
                <div className="skillItem" onClick={() => navigateTo("https://dotnet.microsoft.com/en-us/languages/csharp")}>
                    <img src={TechIcons.CSHARP} alt="C#" />
                    C#
                </div>
                {/*.NET */}
                <div className="skillItem" onClick={() => navigateTo("https://dotnet.microsoft.com/en-us/")}>
                    <img src={TechIcons.DOTNET} alt=".NET" />
                    .NET
                </div>
                {/* Java */}
                <div className="skillItem" onClick={() => navigateTo("https://dev.java/")}>
                    <img src={TechIcons.JAVA} alt="Java"/>
                    Java
                </div>
                {/* Python */}
                <div className="skillItem" onClick={() => navigateTo("https://www.python.org/")}>
                    <img src={TechIcons.PYTHON} alt="Python"/>
                    Python
                </div>
                {/* Docker */}
                <div className="skillItem" onClick={() => navigateTo("https://www.docker.com/")}>
                    <img src={TechIcons.DOCKER} alt="Docker"/>
                    Docker
                </div>
                {/* SonarQube */}
                <div className="skillItem" onClick={() => navigateTo("https://www.sonarsource.com/products/sonarqube/")}>
                    <img src={TechIcons.SONARQUBE} alt="SonarQube"/>
                    SonarQube
                </div>
                {/* Drone CI */}
                <div className="skillItem" onClick={() => navigateTo("https://www.drone.io/")}>
                    <img src={TechIcons.DRONE_CI} alt="Drone CI"/>
                    Drone CI
                </div>
                {/* Kali Linux */}
                <div className="skillItem" onClick={() => navigateTo("https://www.kali.org/")}>
                    <img src={TechIcons.KALI_LINUX} alt="Kali Linux"/>
                    Kali Linux
                </div>
                {/*Ubuntu */}
                <div className="skillItem" onClick={() => navigateTo("https://ubuntu.com/")}>
                    <img src={TechIcons.UBUNTU} alt="Ubuntu"/>
                    Ubuntu
                </div>
                {/* K6 Testing */}
                <div className="skillItem" onClick={() => navigateTo("https://k6.io/")}>
                    <img src={TechIcons.K6_TESTING} alt="K6 Testing"/>
                    K6 Testing
                </div>
                {/* Unit Testing */}
                <div className="skillItem" onClick={() => navigateTo("https://aws.amazon.com/what-is/unit-testing/")}>
                    <img src={TechIcons.UNIT_TESTING} alt="Unit Testing"/>
                    Unit Testing
                </div>
                {/* SQL */}
                <div className="skillItem" onClick={() => navigateTo("https://aws.amazon.com/what-is/sql/")}>
                    <img src={TechIcons.SQL} alt="SQL"/>
                    SQL
                </div>
                {/* Git */}
                <div className="skillItem" onClick={() => navigateTo("https://git-scm.com/")}>
                    <img src={TechIcons.GIT} alt="Git"/>
                    Git
                </div>
                {/*Rest API */}
                <div className="skillItem" onClick={() => navigateTo("https://www.ibm.com/topics/rest-apis")}>
                    <img src={TechIcons.API} alt="Rest API"/>
                    Rest API
                </div>
                {/* Angular */}
                <div className="skillItem" onClick={() => navigateTo("https://angular.dev/")}>
                    <img src={TechIcons.ANGULAR} alt="Angular"/>
                    Angular
                </div>
                {/* React */}
                <div className="skillItem" onClick={() => navigateTo("https://react.dev/")}>
                    <img src={TechIcons.REACT} alt="React"/>
                    React
                </div>
                {/*Blazor */}
                <div className="skillItem" onClick={() => navigateTo("https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-8.0")}>
                    <img src={TechIcons.BLAZOR} alt="Blazor"/>
                    Blazor
                </div>
                {/*Scrum */}
                <div className="skillItem" onClick={() => navigateTo("https://www.scrum.org/resources/what-scrum-module")}>
                    <img src={TechIcons.SCRUM} alt="Scrum"/>
                    Scrum
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;
