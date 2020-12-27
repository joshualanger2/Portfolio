import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Header  from "./components/header/Header";
import { Item } from "./components/Item";
import { List } from "./components/List";
import Message from "./components/Message"
import Footer from "./components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import {selectProject, initialLoad} from "./actions"
import {Fishing} from './components/projects/Fishing'

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
    if (selectedTab === "about") {
        dispatch(initialLoad(true))
    } else if ((selectedTab === "projects") && (selectedProject !== "")) {
        dispatch(initialLoad(false))
    }
    return (
        <>
            <Header />
            <div className="container">
                <AnimateSharedLayout type="crossfade">
                    {selectedTab === "projects" ?
                        <Router>
                            <Route path={["/:id", "/"]} component={Store} />
                        </Router> :
                        <Message />}
                </AnimateSharedLayout>
                <Footer />
            </div>
        </>

    );
}
