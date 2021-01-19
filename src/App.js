import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion, useAnimation } from "framer-motion";
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import { List } from "./components/List";
import About from "./components/About"
import Footer from "./components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {selectProject, initialLoad} from "./actions"
import {Fishing} from './components/projects/Fishing'
import {Portfolio} from './components/projects/Portfolio'
import {AlaCarte} from './components/projects/AlaCarte'
import {JustBreathe} from './components/projects/JustBreathe'
import {Precordings} from './components/projects/Precordings'
import {defaultHeight, defaultHeightTablet, defaultHeightMobile, standardProjectHeight, tabletProjectHeight, mobileProjectHeight} from './utility/viewPortHeightSwitch'

// height: ${props => ((props.selectedTab === "about") || (props.selectedProject !== "")) ? "auto" : "2000px"};

const AppContainer = styled.div`
    width: 200vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: hidden;
    height: ${props => props.selectedProject === "" ? defaultHeight(props.selectedTab) : standardProjectHeight(props.selectedProject)};
    @media only screen and (max-width: 1000px) {
        height: ${props => props.selectedProject === "" ? defaultHeightTablet(props.selectedTab) : tabletProjectHeight(props.selectedProject)};
    }
    @media only screen and (max-width: 600px) {
        height: ${props => props.selectedProject === "" ? defaultHeightMobile(props.selectedTab) : mobileProjectHeight(props.selectedProject)};
    }
`;

function renderItem(id) {
        switch(id) {
            case "fishing":
                return <Fishing id={id} key="item" />;
            case "alacarte":
                return <AlaCarte id={id} key="item" />
            case "justbreathe":
                return <JustBreathe id={id} key="item" />
            case "precordings":
                return <Precordings id={id} key="item" />
            case "portfolio":
                return <Portfolio id={id} key="item" />
            default:
                return null;
        }
}

function Store({ match }) {
    let { id } = match.params;
    let dispatch = useDispatch()

    id && dispatch(selectProject(id))
    id === undefined && dispatch(selectProject(""))

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

    // * Page Animation
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

    const scrollUp = () => {
        window.scrollTo({ top: 20, behavior: 'smooth' })
    }
    selectedProject && scrollUp();

    return (
        <>

            <AppContainer selectedTab={selectedTab} selectedProject={selectedProject}>
            <Header />
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
                <About />
                <Footer />
            </motion.div>
            </AppContainer>
        </>

    );
}
