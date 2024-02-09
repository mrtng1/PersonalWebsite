import React from 'react';
import './SendEmailComponent.css';
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
            <button className="button" onClick={() => handleButtonClick(linkedinURL)}><CiLinkedin /></button>
            <button className="button" onClick={() => handleButtonClick(`mailto:${email}`)}><MdOutlineEmail /></button>
            <button className="button" onClick={() => handleButtonClick(githubUrl)}><VscGithub /></button>
        </div>
    );
}

export default ContactInfo;