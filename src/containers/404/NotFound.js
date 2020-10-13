import React from "react";
//CSS
import styles from "./NotFound.module.css";
//Component
import Page from "../../components/page/Page";
import Bouton from "../../components/UI/boutons/Bouton";

function NotFound(props) {
    return (
        <Page
            titre='Oh oh... Vous êtes perdu&nbsp;?'
            soustitre="C'est pas très grave, mais avouez que sur un site avec aussi peu de pages, il faut le faire quand même..."
            headerheight={props.headerheight}>
            <div className={styles.container}>
                <Bouton couleur='rose' link='/'>
                    Je retourne à l'accueil
                </Bouton>
            </div>
        </Page>
    );
}

export default NotFound;
