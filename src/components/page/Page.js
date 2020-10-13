import React from "react";
import { motion } from "framer-motion";
//Components
import Titre from "../UI/h2/Titre2";
import SousTitre from "../UI/soustitre/Soustitre";
//CSS
import styles from "./Page.module.css";

function Page(props) {
    return (
        <>
            <motion.div
                exit={{
                    translateY: ["-100%", "0%", "0%", "200%", "-100%"],
                    transition: { duration: 2, ease: "easeInOut", times: [0, 0.3, 0.7, 1, 1], delay: 0.5 },
                }}
                className='rose'></motion.div>
            <motion.div
                exit={{
                    translateY: ["-100%", "0%", "0%", "200%", "-100%"],
                    transition: { duration: 1.7, ease: "easeInOut", times: [0, 0.3, 0.7, 1, 1], delay: 0.8 },
                }}
                className='gris'></motion.div>
            <motion.section
                className={[styles.section, "container"].join(" ")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7, ease: "easeInOut" } }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}>
                <div className={styles.top}>
                    <Titre>{props.titre}</Titre>
                    <SousTitre>{props.soustitre}</SousTitre>
                </div>
                <div>{props.children}</div>
            </motion.section>
        </>
    );
}

export default Page;
