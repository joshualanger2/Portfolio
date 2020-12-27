import React from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import cloudImage from "../assets/clouds-image.jpg"

const aboutData = [
    "Hey - my name is Josh and I’m glad you found my site!",
    "I love to think about problems and occassionally I try to design and build a solution to one.",
    "I am originally from Munich, Germany and grew up between there and California.",
    "For the last 5 years I studied Philosophy and Rhetoric while completing my BA at Bates College and Maine before joining HubSpot in Cambridge.",
    "It was during this time that I discovered my passion for the building of digital products. I began to use Sketch and attended General Assembly’s UX bootcamp.",
    "This past year I completed iOS and Web Development bootcamps so that I can build the MVP of designed solutions. This is that work —"
];

function Message() {
    const selectedTab = useSelector(state => state.selectTab);

    const controls = useAnimation();
    const variants = {
        visible: { opacity: [0.5, 1], x: [-50, 0]},
        hidden: { opacity: [1, 0], x: [0, 100] },
    }

    if (selectedTab === "about") {
        controls.start("visible")
    } else {
        controls.start("hidden")
    }

	return (
		<ParentDiv
            animate={controls}
            variants={variants}
            transition={ {duration: 0.15, ease: "easeOut", type: "tween" }}
            exit={{opacity: 0, x: -50, transition: { duration: 0.15 }}}
        >
            <StyledDiv>
                <StyledImg src={cloudImage}/>
                <StyledHeader>{aboutData[0]}</StyledHeader>
                <StyledHeader>{aboutData[1]}</StyledHeader>
                <StyledHeader>{aboutData[2]}</StyledHeader>
			</StyledDiv>
		</ParentDiv>
	);
}

export default Message;

// styled components
const ParentDiv = styled(motion.div)`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`;

const StyledDiv = styled(motion.div)`
	width: 80vw;
	height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	background-color: #3d5a80;
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
`;

const StyledHeader = styled(motion.h2)`
	color: white;
	text-align: left;
    line-height: 1.2;
    font-size: 60px;
    font-weight: 800;
    margin: 2% 0;
    max-width: 65vw;
`;

const StyledImg = styled.img`
    margin: 0 auto;
    width: 75vw;
    height: auto;
`;