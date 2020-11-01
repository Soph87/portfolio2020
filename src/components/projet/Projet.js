import React from "react";
//CSS
import styles from "./Projet.module.css";
//SVG
import Git from "../SVG/Github";

export default function Projet(props) {
    let data = props.data;
    let img = "https://sophie-roche.fr/api/public/images/" + data.image;
    let technos = data.technos.split(",");
    let paire = props.index % 2 === 0 && true;
    let paireClasse = paire ? styles.projetCard : [styles.cardImpaire, styles.projetCard].join(" ");

    const handleProjetClick = (video) => {
        props.handleClickParent(video);
    };

    return (
        <div className={paireClasse}>
            <div className={styles.cardImage}>
                <p className={styles.infos}>&lt;{data.annee}&gt;</p>
                <img src={img} alt={data.titre} />
                <p className={styles.infos}>&lt;Client: {data.client}&gt;</p>
            </div>
            <div className={styles.cardTexte}>
                <h3>{data.titre}</h3>
                <p>{data.intro}</p>
                <p className={styles.technos}>
                    Stack :{" "}
                    {technos.map((techno, index) => {
                        if (index === technos.length - 1) {
                            return techno;
                        }
                        return techno + ", ";
                    })}
                </p>
                <div className={styles.boutonContainer}>
                    {data.git && (
                        <a href={data.git} target='_blank' rel='noopener noreferrer' className={styles.git}>
                            <Git />
                        </a>
                    )}
                    {data.video === "1" ? (
                        <button
                            className={styles.liensOndule}
                            rel='noopener noreferrer'
                            onClick={() => handleProjetClick(data.lien)}>
                            Voir la vidéo
                        </button>
                    ) : (
                        <a href={data.lien} className={styles.liensOndule} target='blank'>
                            Visiter le site
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
