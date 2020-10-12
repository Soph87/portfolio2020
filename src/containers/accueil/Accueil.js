import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
//Components
import Hero from "../../components/accueil/hero/Hero";
import Works from "../../components/accueil/works/Works";
import Apropos from "../../components/accueil/apropos/Apropos";

function Accueil(props) {
    //Scroll la page en haut au chargement du composant
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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

        //refScrollBtn.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Hero scroll={scrollToWorks} />
            <Works projets={projets} ref={refScrollBtn} />
            <Apropos />
        </>
    );
}

export default Accueil;
