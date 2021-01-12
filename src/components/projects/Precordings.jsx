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
                <motion.div className="overview-container">
                    <CloseButton />
                    <ImageContainer
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img style={{maxWidth: "900px", height: "auto", position: "absolute", left: 0}} layoutId={`card-image-${id}`} src={image} alt="" />
                    </ImageContainer>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.span className="url" onClick={() => openInNewTab('https://precordings.com')}>Visit website</motion.span>
                        <motion.div className="summary-container" layoutId={`summary-container-${id}`}>
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
                    <WhiteP text="When working with customers while in HubSpot Support, I noticed the positive impact that screen recordings/video tutorials had. They provided a quicker and easier to follow format for some users than written instructions." />
                    <CenteredH3 text="The Problem" />
                    <WhiteP text="Although enterprise recording tools such as Loom allow you to store, share and organize videos in the cloud" />
                    <CenteredH3 text="The Solution" />
                    <WhiteP text="I have created a library for HubSpot Support that can store recordings by product area to scale with product. This will allow Support Specialists (and even people from Sales, Customer Success or Onboarding) to easily discover and use the right recording at the right time." />
                    <CenteredH3 text="Next Steps" />
                    <WhiteP text="" />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
