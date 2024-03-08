import './App.css';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import SkillsComponent from "./Components/SkillsComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import SendEmailComponent from "./Components/SendEmailComponent";
import HeadComponent from "./Components/HeadComponent";
import ContactInfo from "./Components/ContactInfo";
import ProjectsComponent from "./Components/ProjectsComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const sections = gsap.utils.toArray('.textSection, .mailSection, .footerSection');
        let currentIndex = 0;
        let throttleTimeout = null; // Brug en throttle timeout til at forhindre for hurtig scrolling

        const scrollToSection = (index) => {
            if (index >= 0 && index < sections.length) {
                currentIndex = index; // Opdater current index

                gsap.to(window, {
                    scrollTo: { y: sections[index].offsetTop, autoKill: false },
                    duration: 0.5,
                    onStart: () => {
                        window.removeEventListener('wheel', handleWheel); // Fjern event listener under animation
                    },
                    onComplete: () => {
                        setTimeout(() => {
                            window.addEventListener('wheel', handleWheel, { passive: false }); // Tilføj den igen efter en kort pause
                        }, 300); // Juster pause som nødvendigt for at opnå den ønskede "smoothness"
                    }
                });
            }
        };

        const handleWheel = (event) => {
            if (throttleTimeout) return; // Hvis der allerede er en throttle timeout, ignorer event

            const direction = event.deltaY > 0 ? 1 : -1;
            scrollToSection(currentIndex + direction);

            throttleTimeout = setTimeout(() => {
                clearTimeout(throttleTimeout);
                throttleTimeout = null;
            }, 300); // Vent før tilladelse af en ny scroll handling
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (throttleTimeout) {
                clearTimeout(throttleTimeout);
            }
        };
    }, []);



    return (
        <div className="main-container">
            <div className="textSection">
                <HeadComponent />
                <ContactInfo />
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
            <div className="textSection">
                <ProjectsComponent/>
            </div>
            <div className="spaceDivider"></div>
            <div className="halfDivider"></div>
            <div className="footerSection">
            <FooterComponent></FooterComponent>
            </div>
        </div>
    );
}

export default App;
