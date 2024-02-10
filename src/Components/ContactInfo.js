import React from 'react';
import '.././App.css';
import { gsap } from 'gsap';
import {CiLinkedin} from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {IoLogoInstagram} from "react-icons/io";
import {VscGithub} from "react-icons/vsc";

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
        </div>
    );
}

export default ContactInfo;