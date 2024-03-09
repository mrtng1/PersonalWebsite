import React from 'react';
import '.././App.css';

function HeadComponent() {
    return (
        <div className="headerSection">
            <p className="headerText disableUserSelect">Martin Grulyo</p>
            <div className="aboutMe disableUserSelect">
                <p>👨‍💻 CS Student, from Slovakia</p>
                <p>🖥️ My Front-End Frameworks React, Vue, Angular, Blazor</p>
                <p>🔧 TechStack C# .NET, Java, JavaScript and TypeScript, Python</p>
                <p>🌍 Languages Danish, English, Slovak, Czech, German</p>
                <p>💼 Other Interests: DevOps & Cybersecurity</p>
                <p>🚀 Loves innovation and teamwork</p>
            </div>
        </div>
    );
}

export default HeadComponent