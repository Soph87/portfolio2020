import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "./Mentions.module.css";
//Components
import Page from "../../components/page/Page";

function Mentions() {
    return (
        <Page
            titre='Mentions légales'
            soustitre="Qu'est ce que vous fabriquez sur cette page franchement&nbsp;? C'est pas vraiment la plus sympa du site... Mais bon, si vous insistez&nbsp;!">
            <div className={styles.mentions}>
                <div>
                    <p className={styles.pcentre}>En vigueur au 22/07/2020</p>
                    <p>
                        Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
                        dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site <Link to='/'>https://sophie-roche.fr/</Link> les présentes
                        mentions légales.
                    </p>
                    <p>
                        La connexion et la navigation sur le site « Portfolio en ligne de Sophie Roche » par l’Utilisateur implique acceptation intégrale et
                        sans réserve des présentes mentions légales.
                    </p>
                    <p>Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 1 : L’ÉDITEUR</h4>
                    <p>
                        L’édition et la direction de la publication du site <Link to='/'>https://sophie-roche.fr/</Link> est assurée par Sophie Roche,
                        domiciliée 18 allée du Tabellio 69390 Charly, dont l'adresse e-mail est : contact@sophie-roche.fr.
                    </p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 2 : L’HÉBERGEUR</h4>
                    <p>
                        L'hébergeur du site <Link to='/'>https://sophie-roche.fr/</Link> est la Société OVH, dont le siège social est situé au 2 rue Kellermann
                        BP 80157 59100 Roubaix.
                    </p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 3 : ACCÈS AU SITE</h4>
                    <p>
                        Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant
                        d’une nécessité de maintenance.
                    </p>
                    <p>
                        En cas de modification, interruption ou suspension des services le site <Link to='/'>https://sophie-roche.fr/</Link> ne saurait être
                        tenu responsable.
                    </p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 4 : COLLECTE DES DONNÉES</h4>
                    <p>
                        Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune
                        donnée concernant les utilisateurs.
                    </p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 5 : COOKIES</h4>
                    <p>
                        L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de
                        navigation.
                    </p>
                    <p>En naviguant sur le site, il les accepte.</p>
                    <p>
                        Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation
                        de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son
                        logiciel de navigation.
                    </p>
                </div>
                <div>
                    <h4 className={styles.titres}>ARTICLE 6 : PROPRIÉTÉ INTELLECTUELLE</h4>
                    <p>
                        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site{" "}
                        <Link to='/'>https://sophie-roche.fr/</Link>, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites
                        judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                    </p>
                </div>
                <div>
                    <p>
                        Réalisé sur <a href='https://www.legalplace.fr'>https://www.legalplace.fr</a>
                    </p>
                </div>
            </div>
        </Page>
    );
}

export default Mentions;
