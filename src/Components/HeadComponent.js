import React from 'react';
import '.././App.css';
import {CiLinkedin} from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {IoLogoInstagram} from "react-icons/io";
import {VscGithub} from "react-icons/vsc";
import ContactInfo from "./ContactInfo";


function HeadComponent() {
    return (
        <div className="headerSection">
            <p className="headerText disableUserSelect">Martin Grulyo</p>
            <div className="aboutMe disableUserSelect">
                Enthusiastic Computer Science student with a specialization in Full Stack Development, DevOps, and Cybersecurity
                <br></br>
                <br></br>
                Originally from Slovakia, currently enhancing my skills in Esbjerg, Denmark
                <br></br>
                <br></br>
                Proficient in Java, TypeScript, JavaScript, Python, SQL, C#, Angular, React, and familiar with GitHub practices.
                <br></br>
                <br></br>
                Experienced in creating responsive UIs, managing SQL databases, applying Scrum methodologies, and ensuring software and cyber security.
                <br></br>
            </div>
            <ContactInfo />
        </div>
    );
}

export default HeadComponent