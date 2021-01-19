import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components"
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import {WhiteP} from '../project-components/WhiteP'
import {openInNewTab} from '../../utility/openInNewTab'
import CloseButton from "../project-components/CloseButton";

const ImageContainer = styled(motion.div)`
    margin-top: 40%;
    max-width: 900px;
    height: auto;
    padding: 20px;
    position: relative;
`;

export function Precordings({ id }) {
    const { category, title, backgroundColor, summary, date, image } = projects.find(project => project.id === id);

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container precordings">
                    <CloseButton />
                    <ImageContainer
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img className="precording-img" layoutId={`card-image-${id}`} src={image} alt="" />
                    </ImageContainer>
                    <motion.div
                        className="title-container open"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.span className="url" onClick={() => openInNewTab('https://precordings.com')}>Visit website</motion.span>
                        <motion.div className="summary-container open" layoutId={`summary-container-${id}`}>
                            <motion.span className="card-summary open" layoutId={`summary-${id}`}>{summary}</motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="content-container precordings"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    <CenteredH3 text="The Project" />
                    <WhiteP text="When working with customers at HubSpot, I noticed the positive impact that screen recordings/video tutorials can have. They provided a quicker and easier to follow format for some users than written instructions." />
                    <CenteredH3 text="The Problem" />
                    <WhiteP text="Although enterprise recording tools such as Loom allow you to store, share and organize videos in the cloud, it can be difficult to organize a large number of videos and effectively share them accross an orgnaization." />
                    <CenteredH3 text="The Solution" />
                    <WhiteP text="I have created a library that can store recordings by product area to scale with the evolving product. This will allow Support Specialists (and even people from Sales, Customer Success or Onboarding) to easily discover and use the right recording at the right time to help our customers." />
                    <WhiteP text="" />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
