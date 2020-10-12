import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
//CSS
import styles from "./Header.module.css";
//Logo
import Logo from "../../images/sophie-roche-logo.svg";

const Header = forwardRef((props, ref) => {
    return (
        <header ref={ref}>
            <nav>
                <NavLink id={styles.logo} to='/'>
                    <h1>
                        <img src={Logo} alt='Portfolio de Sophie Roche' />
                    </h1>
                </NavLink>
                <div id={styles.menu}>
                    <NavLink to='/portfolio' className={styles.link}>
                        Portfolio
                    </NavLink>
                    <NavLink to='/contact' className={styles.link}>
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
});

export default Header;
