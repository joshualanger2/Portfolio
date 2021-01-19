import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import CenterdImage from '../project-components/CenteredImage'
import {WhiteP} from '../project-components/WhiteP'
import fishingGIF from '../../assets/fishing-app-ui.gif'
import CloseButton from '../project-components/CloseButton'

export function Fishing({ id }) {
    const { category, title, backgroundColor, summary, date, image } = projects.find(project => project.id === id);

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container">
                    <CloseButton />
                    <motion.div
                        layoutId={`card-image-container-${id}`}
                        className="card-image-container open"
                    >
                        <motion.img style={{scale: 1.4, rotate: 45, display: "block"}} layoutId={`card-image-${id}`} className="project-img" src={image} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container open"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.div className="summary-container open" layoutId={`summary-container-${id}`}>
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
                    <CenteredH3 text="The Problem" />
                    <WhiteP text="Overfishing is leading to the decimation of global fish populations which will cause fish and other dependent organisms to go extinct. We must co-exist within our natural ecosystems to avoid long term consequences for our planet and our ability to survive on it." />
                    <CenteredH3 text="The Philosophy" />
                    <WhiteP text={"In their book, \"Free Market Environmentalism,\" Terry L. Anderson and Donald R. Leal (et al.) argue that free markets are a better way to respect the environment than public policy. A \"free market\" is an economic system in which prices for goods and services are set by competing firms who are free to enter and leave the market. For example, cafés in Paris operate in a free market as each is able to enter and leave the market and decide the price of their goods. This type of market opposes a system in which prices are set through a central planner or regulation. A free market for fishing would allow firms to buy and sell the ability to fish. Ideally, this would control the global fish populations through sustainable fishing and population control. It would also allow fishermen or fisherwomen to earn a profit without the worry that they are harming the environment."}/>
                    <WhiteP text="This wouldn’t be a philosophy project if it didn’t have a counter-argument! Philosopher John B. Cobb argues that when “firms compete with each other on the free market, their decisions are not guided by environmental considerations.” Their decisions are solely guided by profit and so seeming environmentally conscious is often more important than truly being so. However, to counter this, we must remember that the primary assumption of a free market is that humans are self-interested beings. Markets are able to harness people’s self interest for good because the right to fish is bought and sold so it is in everyone's interest to ensure no one illegally hunts as that would devalue the price of fish by increasing the supply." />
                    <CenteredH3 text="The Solution" />
                    <WhiteP text="We proposed that a virtual marketplace should be created to promote transparency and easy purchasing/selling of fishing permits based on the actively changing fish populations. We designed what a consumer version of this may look like for those who enjoy fishing as a hobby and would like to participate in this marketplace. Other apps could be created for larger enterprise fishing operations."/>
                    <CenterdImage src={fishingGIF} alt="fishing-app-ui-gif" />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
