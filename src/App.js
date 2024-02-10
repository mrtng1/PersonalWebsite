import './App.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import SkillsComponent from "./Components/SkillsComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import SendEmailComponent from "./Components/SendEmailComponent";
import HeadComponent from "./Components/HeadComponent";

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        const sections = gsap.utils.toArray(".textSection, .mailSection");

        const debounce = (func, wait, immediate) => {
            let timeout;
            return function() {
                const context = this, args = arguments;
                const later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

        const scrollToSection = debounce((index) => {
            gsap.to(window, {
                scrollTo: {
                    y: sections[index].offsetTop,
                    autoKill: false
                },
                duration: 0.5
            });
        }, 100, false);

        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top bottom-=40%",
                end: "bottom top+=40%",
                onEnter: () => scrollToSection(index),
                onEnterBack: () => scrollToSection(index),
            });
        });
    }, []);

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
