import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
//Components
import Footer from "../../components/footer/Footer";
import Hero from "../../components/accueil/hero/Hero";
import Works from "../../components/accueil/works/Works";
import Apropos from "../../components/accueil/apropos/Apropos";

function Accueil(props) {
    const [projets, setProjets] = useState(null);
    const refScrollBtn = useRef(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}back/projetmin`).then((response) => {
            setProjets(Object.values(response.data));
        });
    }, []);

    const scrollToWorks = () => {
        let duree = 1000;
        let topEl = refScrollBtn.current.getBoundingClientRect().top - props.headerheight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            let tempsEcoule = currentTime - startTime;
            let lancement = easeInOut(tempsEcoule, startPosition, topEl, duree);
            window.scrollTo(0, lancement);
            if (tempsEcoule < duree) requestAnimationFrame(animation);
        };

        const easeInOut = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className='mainContainer'>
            <main style={{ paddingTop: `${props.headerheight}px` }}>
                <Hero scroll={scrollToWorks} />
                <Works projets={projets} ref={refScrollBtn} />
                <Apropos />
            </main>
            <Footer />
        </motion.div>
    );
}

export default Accueil;
