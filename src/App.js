import React, { useEffect, useRef, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//CSS
import "normalize.css";
import "./App.css";
//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//Containers
import Accueil from "./containers/accueil/Accueil";
import Contact from "./containers/contact/Contact";
import Portfolio from "./containers/portfolio/Portfolio";
import Mentions from "./containers/mentions/Mentions";
import NotFound from "./containers/404/NotFound";

function App() {
    const [paddingHeight, setHeaderHeight] = useState(0);

    const headerref = useRef(null);

    const location = useLocation();

    useEffect(() => {
        let height = headerref.current.getBoundingClientRect().height;
        setHeaderHeight(height);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1000);
    }, [location.pathname]);

    return (
        <>
            <Header ref={headerref} />
            <main style={{ paddingTop: `${paddingHeight}px` }}>
                <AnimatePresence initial={false} exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route path='/' exact>
                            <Accueil headerheight={paddingHeight} />
                        </Route>
                        <Route path='/portfolio'>
                            <Portfolio />
                        </Route>
                        <Route path='/contact' component={Contact} />
                        <Route path='/mentions-legales'>
                            <Mentions />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </AnimatePresence>
            </main>
            <Footer />
        </>
    );
}

export default App;
