import React from "react";
//CSS
import styles from "./Soustitre.module.css";

function Soustitre(props) {
    return <p className={styles.sousTitre}>{props.children}</p>;
}

export default Soustitre;
