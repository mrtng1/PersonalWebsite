import React from 'react';
import '.././App.css';

function HeadComponent() {
    return (
        <div className="headerSection">
            <p className="headerText disableUserSelect">Martin Grulyo</p>
            <div className="aboutMe disableUserSelect">
                <p>👨‍💻 CS Student, from Slovakia</p>
                <p>🖥️ My Frameworks React, Vue, Angular, Blazor</p>
                <p>🔧 TechStack C# .NET, Java, JavaScript and TypeScript, Python</p>
                <p>🌍 Languages Slovak, Czech, English, Danish, German</p>
                <p>💼 DevOps & Cybersecurity Aspirant</p>
                <p>🚀 Loves innovation and teamwork</p>
            </div>
        </div>
    );
}

export default HeadComponent