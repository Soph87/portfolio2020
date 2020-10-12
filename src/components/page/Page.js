import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
//Components
import Titre from "../UI/h2/Titre2";
import SousTitre from "../UI/soustitre/Soustitre";
//CSS
import styles from "./Page.module.css";

function Page(props) {
    /* let grisRef = useRef(null);
    let roseRef = useRef(null); */
    let pageRef = useRef(null);

    useEffect(() => {
        gsap.to(pageRef, { opacity: 1, pointerEvents: "auto", duration: 4 });

        return () => {
            gsap.to(pageRef, { opacity: 0, pointerEvents: "none", duration: 4 });
            //gsap.fromTo(roseRef, { yPercent: -100 }, { yPercent: 200, duration: 1, ease: "power1.inOut" });
        };
    }, []);

    return (
        <>
            <div className='grise'></div>
            <div className='rose'></div>
            <section className={[styles.section, "container", styles.anim].join(" ")} ref={(el) => (pageRef = el)}>
                <div className={styles.top}>
                    <Titre>{props.titre}</Titre>
                    <SousTitre>{props.soustitre}</SousTitre>
                </div>
                <div>{props.children}</div>
            </section>
        </>
    );
}

export default Page;
