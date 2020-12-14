import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Item } from "./Item";
import { List } from "./List";
import Message from "./components/Message"
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";

function Store({ match }) {
    let { id } = match.params;
    // const updateBody = () => {
    //     if (id !== undefined) {
    //         document.body.classList.add('selected-project');
    //     } else if (id === undefined) {
    //         document.body.classList.remove('selected-project')
    //     }
    // }

    const scrollUp = () => {
        window.scrollTo({ top: 20, behavior: 'smooth' })
    }

    id && scrollUp();
    // id === undefined && updateBody();

    return (
        <>
        <List selectedId={id} />
        <AnimatePresence>
            {id && <Item id={id} key="item" />}
            {console.log(id)}
        </AnimatePresence>
        </>
    );
}

export default function App() {
    const selectedTab = useSelector(state => state.selectTab);
    return (
        <div className="container">
            <AnimateSharedLayout type="crossfade">
                <Header />
                {selectedTab === "projects" ?
                    <Router>
                        <Route path={["/:id", "/"]} component={Store} />
                    </Router> :
                    <Message />}
                <Footer />
            </AnimateSharedLayout>
        </div>
    );
}
