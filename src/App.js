import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion, useAnimation, useMotionValue } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import { Item } from "./components/Item";
import { List } from "./components/List";
import Message from "./components/Message"
import Footer from "./components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {selectProject, initialLoad} from "./actions"
import {Fishing} from './components/projects/Fishing'
import { FlexDiv } from "./components/global/styled-components";

function Store({ match }) {
    let { id } = match.params;
    let dispatch = useDispatch()

    const scrollUp = () => {
        window.scrollTo({ top: 20, behavior: 'smooth' })
    }
    id && scrollUp();
    id && dispatch(selectProject(id))
    id === undefined && dispatch(selectProject(""))

    function renderItem(id) {
        switch(id) {
            case "fishing":
                return <Fishing id={id} key="item" />;
            case "alacarte":
                return <Item id={id} key="item" />
            case "justbreathe":
                return <Item id={id} key="item" />
            case "precordings":
                return <Item id={id} key="item" />
            case "portfolio":
                return <Item id={id} key="item" />
            default:
                return null;
        }
    }

    return (
        <>
        <List selectedId={id} />
        <AnimatePresence>
            {renderItem(id)}
        </AnimatePresence>
        </>
    );
}

export default function App() {
    const selectedTab = useSelector(state => state.selectTab);
    const selectedProject = useSelector(state => state.selectProject)
    const dispatch = useDispatch();
    const projectsControls = useAnimation();
    const aboutControls = useAnimation();
    const variants = {
        projectsInitial: {x: '0%'},
        projectsVisible: {x: ['100%', '0%']},
        projectsHidden: {x: ['0%', '-100%']},
        aboutInitial: {x: '0%'},
        aboutVisible: {x: ['0%', '-100%']},
        aboutHidden: {x: ['-100%', '0%']}
    }

    if (selectedTab === "about") {
        dispatch(initialLoad(false))
    }

    if ((selectedTab === "projects") && (initialLoad !== false)) {
        projectsControls.start("projectsInitial");
        aboutControls.start("aboutInitial");
    } else if ((selectedTab === "projects") && (initialLoad !== true)){
        aboutControls.start("aboutHidden");
        projectsControls.start("projectsVisible");
    } else if (selectedTab === "about") {
        projectsControls.start("projectsHidden");
        aboutControls.start("aboutVisible");
    }

    return (
        <>
            <Header />
            <div className="app-container">
            <motion.div
                className="page-container projects"
                animate={projectsControls}
                variants={variants}
                transition={{duration: 0.2, ease: "easeOut", type: "tween" }}
            >
                <AnimateSharedLayout type="crossfade">
                    <Router>
                        <Route path={["/:id", "/"]} component={Store} />
                            <Footer />
                        </Router>
                    </AnimateSharedLayout>
            </motion.div>
            <motion.div
                className="page-container"
                animate={aboutControls}
                variants={variants}
                transition={{duration: 0.2, ease: "easeOut", type: "tween" }}
            >
                <Message />
                <Footer />
            </motion.div>
            </div>
        </>

    );
}
