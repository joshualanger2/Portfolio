import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
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

	return (
		<ParentDiv>
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
    width: 100vw;
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
	background-color: #e2f3ff;
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
`;

const StyledHeader = styled(motion.h2)`
	color: #3d5a80;
	text-align: left;
    line-height: 1.2;
    font-size: 55px;
    font-weight: 800;
    margin: 3% 0;
    max-width: 65vw;
`;

const StyledImg = styled.img`
    margin: 0 auto;
    width: 65vw;
    height: auto;
`;