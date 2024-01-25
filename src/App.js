import './App.css';
import {motion} from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import {MdKeyboardDoubleArrowDown, MdOutlineEmail} from "react-icons/md";
import {IoIosArrowDown, IoLogoInstagram} from "react-icons/io";
import {VscGithub} from "react-icons/vsc";
import SkillsComponent from "./Components/SkillsComponent";

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

    const buttonVariants = {
        hidden: { y: -3, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="main-container">
            <motion.div className="middle" initial={{ y: '-8vh' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}>

                <div>
                    <motion.p
                        className="headerText disableUserSelect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>

                        Martin Grulyo
                    </motion.p>

                <div className="aboutMe disableUserSelect">
                    Computer Science student with skills in Java, TypeScript, JavaScript, Python, SQL, and GitHub.
                    <br></br>
                </div>

                    <div className="contactInfo">
                        <motion.button className="button" onClick={handleLinkedInClick}
                                       variants={buttonVariants}
                                       initial="hidden"
                                       animate="visible"
                                       whileHover={{ scale: 1.1 }}
                                       transition={{ duration: 0.2, delay: 0}}>
                            <CiLinkedin />
                        </motion.button>

                    <motion.button className="button"
                            onClick={handleEmailClick}
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2, delay: 0.15}}>
                        <MdOutlineEmail />
                    </motion.button>

                    <motion.button className="button"
                            onClick={handleInstagramClick}
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2, delay: 0.3}}>
                        <IoLogoInstagram />
                    </motion.button>

                    <motion.button className="button"
                            onClick={handleGithubClick}
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2, delay: 0.45}}>
                        <VscGithub />
                    </motion.button>

                </div>
                </div>
            </motion.div>

            <div className="spaceDivider"></div>
            <div className="skillsSection">
                <SkillsComponent />
            </div>
        </div>
    );
}

export default App;

