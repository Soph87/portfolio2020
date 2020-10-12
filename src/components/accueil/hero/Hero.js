import React from "react";
import { NavLink } from "react-router-dom";
//CSS
import styles from "./Hero.module.css";
//Components
import Bouton from "../../UI/boutons/Bouton";
import SousTitre from "../../UI/soustitre/Soustitre";
import Titre from "../../UI/h2/Titre2";
//Images
import arc from "../../../images/mon-arc.gif";

function Hero(props) {
    return (
        <section id={styles.accueilSection} className='container'>
            <div>
                <div id={styles.arcContainer}>
                    <img
                        src={arc}
                        alt="animation d'un arc qui tire une flèche. L'arc est dessiné avec la forme d'une accolade de JSX"
                        id={styles.arc}
                    />
                </div>
                <div id={styles.heroContenu}>
                    <Titre>
                        Développeuse et webdesigner, j'ai plus d'une corde à mon
                        arc&nbsp;! Et si on faisait des{" "}
                        <NavLink id={styles.logo} to='/portfolio'>
                            projets cools
                        </NavLink>{" "}
                        ensemble&nbsp;?
                    </Titre>
                    <SousTitre>
                        Si vous avez besoin d'une développeuse capable d'adapter
                        les maquettes au gré des avancements d'un projet,
                        autodidacte et en plus sympa, ne cherchez plus, vous
                        m'avez trouvée&nbsp;!
                    </SousTitre>
                    <div className={styles.cta}>
                        <Bouton couleur='rose' link='/contact'>
                            <span>OK !</span> On se contacte vite alors !
                        </Bouton>
                        <Bouton couleur='gris' click={props.scroll}>
                            <span>Mmm...</span> Je peux en savoir plus avant ?
                        </Bouton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
