import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Code from "../pages/Code";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function AppRouter() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <ScrollToTop />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/code" element={<Code />} />
            </Routes>
        </AnimatePresence>
    );
}
