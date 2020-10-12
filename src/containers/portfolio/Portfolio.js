import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import { useLocation } from "react-router-dom";
//Components
import Page from "../../components/page/Page";
import Titre from "../../components/UI/h2/Titre2";
import Projet from "../../components/projet/Projet";
import Bouton from "../../components/UI/boutons/Bouton";
import Modal from "../../components/modal/Modal";
//CSS
import styles from "./Portfolio.module.css";

function Portfolio() {
    //Scroll la page en haut au chargement du composant
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [projets, setProjets] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("#");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}back/tousprojets`).then((response) => {
            setProjets(Object.values(response.data));
        });
    }, []);

    //Charge le bonne vidéo puis ouvre la modale
    const handleProjetClick = (video) => {
        setVideoLink(video);
        setIsOpen(true);
    };

    //Ferme la modale
    const handleFermeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Page titre='Welcome sur mon portfolio' soustitre="Voici quelques projets sur lesquels j'ai pu travailler, liste non exhaustive&nbsp;!">
                {projets &&
                    projets.map((projet, index) => {
                        return <Projet key={projet.id} data={projet} index={index} handleClickParent={handleProjetClick} />;
                    })}
            </Page>
            <section className={styles.bottom}>
                <Titre>Mon profil vous plait&nbsp;? Entrons vite en contact alors&nbsp;!</Titre>
                <div className={styles.cta}>
                    <Bouton couleur='rose' link='/contact'>
                        <span>YES !</span>Au formulaire de contact SVP
                    </Bouton>
                </div>
            </section>
            {isOpen && (
                <Modal handleFermeParent={handleFermeModal}>
                    <div className='playerWrap'>
                        <ReactPlayer className='player' url={videoLink} width='100%' height='100%' controls={true} />
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Portfolio;
