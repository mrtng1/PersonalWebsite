import './App.css';
import {motion} from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import {MdOutlineEmail} from "react-icons/md";
import {IoIosArrowDown, IoLogoInstagram} from "react-icons/io";
import {VscGithub} from "react-icons/vsc";

function App() {
    const linkedinURL = "https://www.linkedin.com/in/mrtngrulyo/";
    const email = "martingrulyo@gmail.com";
    const instagramUrl = "https://www.instagram.com/martingrulyo/";
    const githubUrl = "https://github.com/mrtng1";

    const handleLinkedInClick = () => {
        window.location.href = linkedinURL;
    };

    const handleEmailClick = () => {
        window.location.href = "mailto:" + email;
    }

    const handleInstagramClick = () => {
        window.location.href = instagramUrl;
    }

    const handleGithubClick = () => {
        window.location.href = githubUrl;
    }

    return (
        <div className="main-container">
            <motion.div className="middle" initial={{ y: '-8vh' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}>

                <div>
                    <motion.p
                        className="headerText"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>

                        Martin Grulyo
                    </motion.p>

                <div className="aboutMe">
                    Computer Science student with skills in Java, TypeScript, JavaScript, Python, SQL, and GitHub.
                    <br></br>
                </div>

                <div className="contactInfo">
                    <button className="button" onClick={handleLinkedInClick}>
                        <CiLinkedin />
                    </button>

                    <button className="button" onClick={handleEmailClick}>
                        <MdOutlineEmail />
                    </button>

                    <button className="button" onClick={handleInstagramClick}>
                        <IoLogoInstagram />
                    </button>

                    <button className="button" onClick={handleGithubClick}>
                        <VscGithub />
                    </button>

                </div>
                </div>
            </motion.div>
        </div>
    );
}

export default App;

