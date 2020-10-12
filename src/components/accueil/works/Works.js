import React, { forwardRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
//CSS
import styles from "./Works.module.css";
//Components
import Projet from "../../projet/Projet";
import Modal from "../../modal/Modal";

const Works = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("#");

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
            <section className={styles.fonce} ref={ref}>
                <div className='container'>
                    {props.projets &&
                        props.projets.map((projet, index) => {
                            return (
                                <Projet
                                    key={projet.id}
                                    data={projet}
                                    index={index}
                                    handleClickParent={handleProjetClick}
                                />
                            );
                        })}
                </div>
            </section>
            {isOpen && (
                <Modal handleFermeParent={handleFermeModal}>
                    <div className='playerWrap'>
                        <ReactPlayer
                            className='player'
                            url={videoLink}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
});

export default Works;
