import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import {WhiteP} from '../project-components/WhiteP'
import UnorderedList from '../project-components/UnorderedList'
import CloseButton from '../project-components/CloseButton'
import CenteredImage from '../project-components/CenteredImage'

export function AlaCarte({ id }) {
    const { category, title, backgroundColor, summary, date, image } = projects.find(project => project.id === id);

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container">
                    <CloseButton />
                    <motion.div
                        className="card-image-container open"
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img style={{scale: 1.4, rotate: 45}} layoutId={`card-image-${id}`} className="project-img" src={image} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.div className="summary-container" layoutId={`summary-container-${id}`}>
                            <motion.span className="card-summary open" layoutId={`summary-${id}`}>{summary}</motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="content-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    <CenteredH3 text="The Project" />
                    <WhiteP text="After graduating from Bates College I felt that I had learned many valuable skills in problem solving and communication, but," />
                    <CenteredH3 text="The Problem" />
                    <WhiteP text="The problem I sought to resolve was that discovering a new place to go to, especially when traveling, is a tedious experience." />
                    <UnorderedList listArray={["There is a flood of information online", "The 5 star rating system can be confusing and unreliable", "Trusted recommendations are scattered", "Recommendations from friends are often lost, forgotten or buried in messaging/notes apps"]}/>
                    <CenteredH3 text="Research" />
                    <WhiteP text="In my research, my goal was to better understand the following questions:" />
                    <UnorderedList listArray={["How do users currently discover new places?", "How do they feel about this experience? (are there any points of friction?)", "What factors are taken into account during the decision making process?"]} />
                    <WhiteP text="Methods" />
                    <UnorderedList listArray={["User Interviews", "Competitive Analysis"]} />
                    <CenteredH3 text="Interviews" />
                    <WhiteP text="Interviews were conducted with 10 people who consider themselves users of location discovery software. Several qualitative assessments were made based on these interviews:" />
                    <UnorderedList listArray={["Personal recommendations are important", "Younger users don’t request recommendations from friends as often because it is inconvenient, impersonal or an imposition", "Many users have a “note” on their phone of recommendations", "Photos of menu items are crucial when verifying the quality of a place"]} />
                    <CenteredH3 text="Market Analysis" />
                    <WhiteP text="A competitive analysis was conducted including a product feature breakdown. Here are some highlights:" />
                    <CenteredImage alt="market-research-highlights" />
                    <CenteredH3 text="Personas" />
                    <WhiteP text="There are two kinds of users that experience this issue: “Layla, the food pioneer” and “Tom, the conservative eater”" />
                    <CenteredH3 text="User Flow" />
                    <WhiteP text="The user flow depicts these user goals:" />
                    <CenteredH3 text="The Solution - Low Fidelity Design" />
                    <WhiteP text="First, features were prioritized to eliminate any non-essential features from the minimum viable product. Next, these features were used to guide the information architecture when sketching initial low fidelity UI designs." />
                    <CenteredImage alt="alacarte-sketches" />
                    <CenteredH3 text="User Testing" />
                    <WhiteP text="User tests were conducted with 5 classmates to determine if the design flow could resolve the user problem in an intuitive way." />
                    <CenteredH3 text="High Fidelity Prototype" />
                    <WhiteP text="After a final design iteration, a high fidelity prototype was created in InVision and an animated demo in Principle." />
                    <CenteredImage alt="alacarte-high-fidelity-prototype-gif" />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
