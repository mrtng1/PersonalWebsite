import './App.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillsComponent from "./Components/SkillsComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import SendEmailComponent from "./Components/SendEmailComponent";
import HeadComponent from "./Components/HeadComponent";

function App() {
    return (
        <div className="main-container">
            <div className="textSection">
                <HeadComponent />
            </div>
            <div className="spaceDivider"></div>
            <div className="textSection">
                <AboutMeComponent />
            </div>
            <div className="spaceDivider"></div>
            <div className="textSection">
                <SkillsComponent />
            </div>
            <div className="spaceDivider"></div>
            <div className="mailSection">
                <SendEmailComponent />
            </div>
        </div>
    );
}

export default App;
