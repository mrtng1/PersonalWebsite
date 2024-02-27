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

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const sections = gsap.utils.toArray('.textSection, .mailSection');
        let currentIndex = 0; // Track the current section index
        let isScrolling = false; // Track if we are currently scrolling to prevent new scrolls

        const scrollToSection = (index) => {
            if (index >= 0 && index < sections.length && !isScrolling) {
                isScrolling = true; // Start scrolling
                currentIndex = index; // Update current index

                gsap.to(window, {
                    scrollTo: {
                        y: sections[index].offsetTop,
                        autoKill: false
                    },
                    duration: 0.5,
                    onComplete: () => {
                        setTimeout(() => {
                            isScrolling = false;
                        }, 50);
                    }
                });
            }
        };

        const handleWheel = (event) => {
            if (isScrolling) {
                event.preventDefault(); // Prevent default scrolling when we are already scrolling
                return;
            }

            // Determine scroll direction
            const direction = event.deltaY > 0 ? 1 : -1;
            scrollToSection(currentIndex + direction);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel); // Clean up event listener
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
            <div className="mailSection">
                <SendEmailComponent />
            </div>
        </div>
    );
}

export default App;
