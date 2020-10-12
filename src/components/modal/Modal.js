import React from "react";
//CSS
import styles from "./Modal.module.css";

function Modal(props) {
    const handleClickFerme = () => {
        props.handleFermeParent();
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.bg} onClick={() => handleClickFerme()}></div>
            <div className={styles.content}>
                <button
                    className={styles.fermeture}
                    onClick={() => handleClickFerme()}
                >
                    x
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
