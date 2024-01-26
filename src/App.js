import './App.css';
import {motion} from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import {MdKeyboardDoubleArrowDown, MdOutlineEmail} from "react-icons/md";
import {IoIosArrowDown, IoLogoInstagram} from "react-icons/io";
import {VscGithub} from "react-icons/vsc";
import SkillsComponent from "./Components/SkillsComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import SendEmailComponent from "./Components/SendEmailComponent";

function App() {
    const linkedinURL = "https://www.linkedin.com/in/mrtngrulyo/";
    const email = "martingrulyo@gmail.com";
    const instagramUrl = "https://www.instagram.com/martingrulyo/";
    const githubUrl = "https://github.com/mrtng1";

    function handleButtonClick(url) {
        window.location.href = url;
    }

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
                    Passionate and Skilled Computer Science student from Slovakia
                    <br></br>
                    <br></br>
                    Based in Esbjerg, Denmark
                    <br></br>
                    <br></br>
                    Skills in Java, TypeScript, JavaScript, Python, SQL, and GitHub.
                    <br></br>
                </div>

                    <div className="contactInfo">
                        <motion.button className="button"
                                       onClick={() => handleButtonClick(linkedinURL)}
                                       whileHover={{ scale: 1.125, transition: { duration: 0.05 } }}>
                            <CiLinkedin />
                        </motion.button>

                        <motion.button className="button"
                                       onClick={() => handleButtonClick(`mailto:${email}`)}
                                       whileHover={{ scale: 1.125, transition: { duration: 0.05 } }}>
                            <MdOutlineEmail />
                        </motion.button>

                        <motion.button className="button"
                                       onClick={() => handleButtonClick(instagramUrl)}
                                       whileHover={{ scale: 1.125, transition: { duration: 0.05 } }}>
                            <IoLogoInstagram />
                        </motion.button>

                        <motion.button className="button"
                                       onClick={() => handleButtonClick(githubUrl)}
                                       whileHover={{ scale: 1.125, transition: { duration: 0.05 } }}>
                            <VscGithub />
                        </motion.button>
                    </div>
                </div>
            </motion.div>

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

