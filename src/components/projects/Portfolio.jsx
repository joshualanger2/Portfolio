import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import {WhiteP} from '../project-components/WhiteP'
import CloseButton from "../project-components/CloseButton";

export function Portfolio({ id }) {
    const { category, title, backgroundColor, date } = projects.find(project => project.id === id);

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container portfolio">
                    <CloseButton />
                    <motion.div
                        className="title-container open"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="content-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    <CenteredH3 text="About this project" />
                    <WhiteP text="I designed this web app using Sketch. My intention with the design was to let the colors of each project dominate. I wanted to enable immersion into each separate project which is why each is represented by a card that can be expanded to fill the whole screen."/>
                    <WhiteP text="I built this portfolio as a React web app using Framer’s Motion API for the animation of components. To style, I used both Sass and Styled Components and implemented Redux for state management. Version control is managed through GitHub." />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}



