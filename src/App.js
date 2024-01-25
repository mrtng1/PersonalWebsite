import './App.css';
import {motion} from "framer-motion";

function App() {
    return (
        <div className="main-container">
            <motion.div className="middle" initial={{ y: '-8vh' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5 }}>
                    <motion.p
                        className="headerText"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}>

                        Martin Grulyo
                    </motion.p>
            </motion.div>
        </div>
    );
}

export default App;

