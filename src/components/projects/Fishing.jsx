import React, {useCallback} from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredP from '../project-components/CenteredP'
import fishingGIF from '../../assets/fishing-app-ui.gif'
import closeButton from '../../assets/fishing-close-button.svg'

export function Fishing({ id }) {
    const { category, title, backgroundColor, summary, date } = projects.find(project => project.id === id);
    const history = useHistory();
    const handleClose = useCallback(() => history.push(`/`), [history])

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container">
                    <motion.div
                        className="card-image-container open"
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img layoutId={`card-image-${id}`} className="project-img" src={fishingGIF} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <span className="date">{date}</span>
                        <h2>{title}</h2>
                        <button className="close-button" onClick={handleClose}>
                            <motion.img src={closeButton} />
                        </button>
                        <div className="summary-container">
                            <span className="card-summary open">{summary}</span>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="content-container" animate>
                    <CenteredP text="The Problem" />
                    <p>Overfishing is leading to the decimation of fish populations. This will cause fish and other dependent organisms to go extinct as a result.</p>
                    <CenteredP text="The Philosophy" />
                    <p>In their paper, Anderson and Leal argue that free markets are a better way to respect the environment than public policy. A free market is an economic system in which prices for goods and services are set by competing firms who are free to enter and leave the market. For example, cafés in Paris operate in a free market as each is able to enter and leave the market and decide the price of their goods. This type of market opposes a system in which prices are set through a central planner or regulation. A free market for fishing would allow firms to buy and sell the ability to fish. Ideally, this would control the global fish populations through sustainable fishing and population control. It would also allow fishermen or fisherwomen to earn a profit without the worry that they are harming the environment. This wouldn’t be a philosophy project if it didn’t have a counter-argument. Cobb argues that “firms compete with each other on the free market, their decisions are not guided by environmental considerations” (Cobb, 681). Their decisions are solely guided by profit and so seeming environmentally conscious is often more important than truly being so. However, to counter this, we must remember that the primary assumption of a free market is that humans are self-interested beings. Markets are able to use people’s self interest for good because the right to fish is bought and sold so it is in everyone's interest to ensure no one illegally hunts as that would devalue the price of fish by increasing the supply. </p>
                    <CenteredP text="The Solution" />
                    <p>We proposed that a virtual marketplace is created to allow easy purchasing and selling of fishing permits based on the actively changing populations. We designed what a consumer version of this may look like for those who enjoy fishing as a hobby and would like to participate in this marketplace. Other apps could be created for larger enterprise customers.</p>
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
