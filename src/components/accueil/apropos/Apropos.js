import React, { useRef } from "react";
//CSS
import styles from "./Apropos.module.css";
//Components
import Bouton from "../../UI/boutons/Bouton";
import Titre from "../../UI/h2/Titre2";
//Images
import moi from "../../../images/moi.jpg";

function Apropos() {
    const centre = useRef(null);
    const oeilD = useRef(null);
    const oeilG = useRef(null);

    const yeuxQuiBougent = (e) => {
        //Où se trouve la souris dans le viewport
        let sourisX = e.clientX;
        let sourisY = e.clientY;

        //Où se trouve le centre des yeux dans le viewport
        let yeuxContainer = centre.current.getBoundingClientRect();
        let centreX = yeuxContainer.left + yeuxContainer.width / 2;
        let centreY = yeuxContainer.top + yeuxContainer.height / 2;

        //Translate des yeux sur les X
        let translateX;
        if (sourisX - centreX > 0) {
            translateX = ((sourisX - centreX) * 20) / (window.innerWidth - centreX);
        } else {
            translateX = (((sourisX - centreX) * 20) / (0 - centreX)) * -1;
        }

        //Translate des yeux sur les Y
        let translateY;
        if (sourisY < centreY) {
            translateY = ((centreY - sourisY) * 20) / -centreY;
        } else {
            translateY = ((sourisY - centreY) * 20) / (window.innerHeight - centreY);
        }

        oeilD.current.style.transform = "translate(" + translateX + "%, " + translateY + "%)";
        oeilG.current.style.transform = "translate(" + translateX + "%, " + translateY + "%)";
    };

    return (
        <section onMouseMove={yeuxQuiBougent} onTouchMove={yeuxQuiBougent}>
            <div className={[styles.apropos, "container"].join(" ")}>
                <div>
                    <Titre>Et sinon... Voici quelques trucs sur moi qui peuvent vous intéresser&nbsp;!</Titre>
                    <div className={styles.moiContainer}>
                        <div>
                            <div className={styles.imgContainer}>
                                <img src={moi} alt='Sophie Roche' />
                                <div className={styles.yeuxContainer} ref={centre}>
                                    <div className={`${styles.oeil} ${styles.oeilDroit}`}>
                                        <div className={styles.pupille} ref={oeilD}>
                                            <div className={styles.reflet}></div>
                                        </div>
                                    </div>
                                    <div className={`${styles.oeil} ${styles.oeilGauche}`}>
                                        <div className={styles.pupille} ref={oeilG}>
                                            <div className={styles.reflet}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.texteMoi}>
                            <h3>Un parcours un peu atypique pour une approche originale</h3>
                            <p>
                                Je suis une webdesigneuse et intégratrice web expérimentée, et développeuse web junior. Suite à mes études en école de design,
                                je suis particulièrement intéressée par l'expérience utilisateur, et par l'idée qu'il faut replacer l'humain au centre de la
                                réflexion.
                            </p>
                            <p>
                                Ayant toujours eu une affinité avec le développement, j'ai souhaité étendre mes compétences. Pour cela, j'ai suivi 2 formations
                                de type bootcamp en développement web. Je suis maintenant à la recherche d'un emploi de développeuse web.
                            </p>
                            <Bouton couleur='rose' link='/files/sophie-roche-CV.pdf' target='oui'>
                                Je veux bien un petit CV à emporter, merci !
                            </Bouton>
                        </div>
                    </div>
                </div>
                <div>
                    <Titre>Mon profil vous plait&nbsp;? Entrons vite en contact alors&nbsp;!</Titre>
                    <div className={styles.cta}>
                        <Bouton couleur='rose' link='/contact'>
                            <span>YES !</span>Au formulaire de contact SVP
                        </Bouton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Apropos;
