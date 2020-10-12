import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "./Bouton.module.css";

function Bouton(props) {
    const couleur = props.couleur;

    return (
        <div
            className={`${styles.boutonContainer} ${
                couleur === "rose" ? styles.rose : styles.gris
            }`}
        >
            {props.link ? (
                <Link
                    to={props.link}
                    className={styles.bouton}
                    target={props.target && "_blank"}
                >
                    {props.children}
                </Link>
            ) : (
                <button className={styles.bouton} onClick={props.click}>
                    {props.children}
                </button>
            )}

            <div className={styles.ombre}></div>
        </div>
    );
}

export default Bouton;
