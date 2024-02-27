import React from 'react';
import '.././App.css';
import {CiLinkedin} from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {VscGithub} from "react-icons/vsc";
import { GrDownload } from "react-icons/gr";
import resume from '../sources/Martin_Grulyo_cv.pdf';


function ContactInfo() {
    const linkedinURL = "https://www.linkedin.com/in/mrtngrulyo/";
    const email = "martingrulyo@gmail.com";
    const githubUrl = "https://github.com/mrtng1";

    function handleButtonClick(url) {
        window.location.href = url;
    }
    return (
        <div className="contactInfo">
            <button className="button" onClick={() => handleButtonClick(linkedinURL)}>
                <CiLinkedin /><span>LinkedIn</span>
            </button>
            <button className="button" onClick={() => handleButtonClick(`mailto:${email}`)}>
                <MdOutlineEmail /><span>Email</span>
            </button>
            <button className="button" onClick={() => handleButtonClick(githubUrl)}>
                <VscGithub /><span>GitHub</span>
            </button>
            <a href={resume} download className="button">
                <GrDownload /><span>My Resume</span>
            </a>
        </div>
    );
}

export default ContactInfo;