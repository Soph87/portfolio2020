import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
//CSS
import styles from "./Contact.module.css";
//Components
import Page from "../../components/page/Page";
import Bouton from "../../components/UI/boutons/Bouton";
//Images
import coucouG from "../../images/coucou.gif";
import coucouD from "../../images/coucou-inverse.gif";

function Contact() {
    //Scroll la page en haut au chargement du composant
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [form, setForm] = useState({
        nom: { value: "", validation: { required: true, minLength: 3 }, isValid: false, classInvalide: false, error: "", valideSecond: false },
        email: { value: "", validation: { required: true, testEmail: true }, isValid: false, classInvalide: false, error: "", valideSecond: false },
        message: { value: "", validation: { required: true, minLength: 10 }, isValid: false, classInvalide: false, error: "", valideSecond: false },
        coche: { value: false, validation: { requiredCoche: true }, isValid: false, classInvalide: false, error: "" },
    });
    const [resultatEnvoi, setResultatEnvoi] = useState({ classe: "", msg: "" });

    //Gère le remplissage et la validation des inputs
    const gereValidation = (inputState, inputName) => {
        let validInput = true;

        if (inputState.validation.required) {
            validInput = inputState.value.trim() !== "" && validInput;
            inputState.error = `Veuillez entrer votre ${inputName}`;
        }

        if (inputState.validation.minLength) {
            validInput = inputState.value.length >= inputState.validation.minLength && validInput;
            inputState.error = `Le ${inputName} doit contenir au moins ${inputState.validation.minLength} caractères`;
        }

        if (inputState.validation.testEmail) {
            validInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputState.value) && validInput;
            inputState.error = "Merci d'entrer un email valide";
        }

        if (inputState.validation.requiredCoche) {
            validInput = inputState.value;
            inputState.error = `Veuillez cocher cette case, sans quoi votre email ne sera pas envoyé`;
        }

        inputState.isValid = validInput;
        return inputState;
    };

    const handleBlur = (e, input) => {
        const formCopie = { ...form };
        formCopie[input] = gereValidation(formCopie[input], input);
        formCopie[input].valideSecond = true;
        if (!formCopie[input].isValid) {
            formCopie[input].classInvalide = true;
        } else {
            formCopie[input].classInvalide = false;
            formCopie[input].error = "";
        }
        setForm(formCopie);
    };

    const handleChange = (e, input) => {
        const formCopie = { ...form };
        if (input === "coche") {
            formCopie[input].value = !formCopie[input].value;
            formCopie[input].isValid = formCopie[input].value;
        } else {
            formCopie[input].value = e.target.value;
        }

        if (formCopie[input].valideSecond) {
            formCopie[input] = gereValidation(formCopie[input], input);
            if (!formCopie[input].isValid) {
                formCopie[input].classInvalide = true;
            } else {
                formCopie[input].classInvalide = false;
                formCopie[input].error = "";
            }
        }
        setForm(formCopie);
    };

    //Gère l'envoi du formulaire au back
    const handleForm = async (e) => {
        e.preventDefault();
        setResultatEnvoi("");
        const formCopie = { ...form };
        let validComplet = true;
        for (let input of Object.keys(formCopie)) {
            formCopie[input] = gereValidation(formCopie[input], input);
            formCopie[input].valideSecond = true;
            if (!formCopie[input].isValid) {
                formCopie[input].classInvalide = true;
                validComplet = false;
            } else {
                formCopie[input].classInvalide = false;
                formCopie[input].error = "";
            }
        }
        setForm(formCopie);

        if (validComplet) {
            let message = JSON.stringify({ nom: form.nom.value, email: form.email.value, message: form.message.value });
            axios
                .post(`${process.env.REACT_APP_URL}back/envoiemail`, message)
                .then((response) => {
                    console.log(response);
                    if (response.data === "success") {
                        setResultatEnvoi({ classe: "ok", msg: "Votre message a bien été envoyé" });
                        const formCopie = { ...form };
                        for (let input of Object.keys(formCopie)) {
                            formCopie[input].value = "";
                            formCopie[input].valideSecond = false;
                        }
                        setForm(formCopie);
                    } else {
                        setResultatEnvoi({ classe: "pasOk", msg: "Un problème est survenu pendant l'envoi de votre message... Merci de réessayer" });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setResultatEnvoi({ classe: "pasOk", msg: "Un problème est survenu pendant l'envoi de votre message... Merci de réessayer" });
                });
        }
    };

    return (
        <Page
            titre="Pour m'envoyer un message, c'est bien ici&nbsp;!"
            soustitre="Pour me contacter par d'autres moyens, mon adresse email ainsi que mon numéro de téléphone sont disponibles sur mon CV">
            <div className={styles.container}>
                <div className={styles.brasG}>
                    <img src={coucouG} alt="Animation d'un bras qui fait coucou" />
                </div>
                <form onSubmit={(e) => handleForm(e)} method='POST' className={styles.formulaire}>
                    <div className={styles.haut}>
                        <div className={styles.formgroup}>
                            <label htmlFor='nom' className={styles.labelHaut}>
                                Nom
                            </label>
                            <input
                                type='text'
                                className={form.nom.classInvalide ? styles.pasValide : ""}
                                id='nom'
                                value={form.nom.value}
                                onChange={(e) => handleChange(e, "nom")}
                                onBlur={(e) => handleBlur(e, "nom")}
                            />
                            <div className={styles.error}>{form.nom.error}</div>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor='email' className={styles.labelHaut}>
                                Email
                            </label>
                            <input
                                type='email'
                                className={form.email.classInvalide ? styles.pasValide : ""}
                                id='email'
                                value={form.email.value}
                                onChange={(e) => handleChange(e, "email")}
                                onBlur={(e) => handleBlur(e, "email")}
                            />
                            <div className={styles.error}>{form.email.error}</div>
                        </div>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor='message' className={styles.labelHaut}>
                            Message
                        </label>
                        <textarea
                            id='message'
                            className={form.message.classInvalide ? styles.pasValide : ""}
                            cols='30'
                            rows='10'
                            value={form.message.value}
                            onChange={(e) => handleChange(e, "message")}
                            onBlur={(e) => handleBlur(e, "message")}></textarea>
                        <div className={styles.error}>{form.message.error}</div>
                    </div>
                    <div>
                        <div>
                            <input
                                type='checkbox'
                                value='validation'
                                checked={form.coche.value}
                                className={styles.coche}
                                onChange={(e) => handleChange(e, "coche")}
                            />
                            <label htmlFor='validation' className={styles.texteVal}>
                                En soumettant ce formulaire, j’accepte que les informations saisies soient utilisées pour permettre de me recontacter
                            </label>
                        </div>
                        <div className={styles.error}>{form.coche.error}</div>
                    </div>
                    <div className={styles.submit}>
                        <Bouton couleur='rose'>
                            <span>GO !</span> Envoyer le message
                        </Bouton>
                    </div>
                    {resultatEnvoi && <div className={resultatEnvoi.classe === "ok" ? styles.repOk : styles.repBad}>{resultatEnvoi.msg}</div>}
                </form>
                <div className={styles.brasD}>
                    <img src={coucouD} alt="Animation d'un bras qui fait coucou" />
                </div>
            </div>
        </Page>
    );
}

export default Contact;
