import React from "react";
//CSS
import styles from "./Titre2.module.css";

function Titre2(props) {
    return (
        <div style={{ overflow: "hidden" }}>
            <h2 className={styles.titre}>{props.children}</h2>
        </div>
    );
}

export default Titre2;
