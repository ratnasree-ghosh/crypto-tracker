import React from "react";
import "./style.css";
import Button from "../../common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion"

const MainComponent = ()=>{
    return (
        <div className="flex-info">
            <div className="left-heading">
                <motion.h1 className="track-crypto-heading" 
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >Track Crypto</motion.h1>

                <motion.h1 className="real-time-heading"
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.5}}
                >Real Time.</motion.h1>

                <motion.p className="para-heading" 
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 1}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>

                <motion.div className="btns-heading"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 1.5}}
                >
                    <Button text={"dashboard"}/>
                    <Button text={"share"} outLine={true}/>
                </motion.div>
                
            </div>
            <div className="phone-container">
                <motion.img className="iphone" src={iphone} alt="iphone" 
                initial={{y: -10}}
                animate={{y: 10}}
                transition={{type: "smooth", repeatType: "mirror" , duration: 2, repeat: Infinity}}
      />
                <img className="gradient" src={gradient} alt="gradient"  />
            </div>
        </div> 
    )
}

export default MainComponent;