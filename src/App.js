import React, { useEffect, useRef, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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

    return (
        <>
            <Header ref={headerref} />
            <main style={{ paddingTop: `${paddingHeight}px` }}>
                <Switch location={location} key={location.pathname}>
                    <Route path='/' exact>
                        <Accueil headerheight={paddingHeight} />
                    </Route>
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/mentions-legales' component={Mentions} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </>
    );
}

export default App;
