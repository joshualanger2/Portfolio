import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const aboutData = [
    "Joshua Langer is currently working as a Support Engineer at HubSpot in Cambridge, MA.",
    "Prior to HubSpot, Joshua completed General Assembly's UX course and Harvard Business Online's Startup Economics.",
    "In 2019, he graduated from Bates College with a Bachelor of Arts in Philosophy and Rhetoric writing his Philosophy Thesis on the changing human-technology relationship.",
    "In 2015, he graduated from Munich International School with an IB Diploma.",
    "In 1997, he was born in Munich before moving to Venice Beach and Santa Monica at the age of 2 for a decade."
]

function Message() {
	const transition = {
		ease: [0.17, 0.67, 0.83, 0.67],
		duration: 5,
		yoyo: Infinity
	};

	return (
		<ParentDiv>
            <StyledDiv
				animate={{ scale: 1, boxShadow: "5px 10px #D3D3D3" }}
				transition={transition}
				initial={{ scale: 0.9 }}
			>
                {aboutData.map(event => {
                    return <StyledHeader>{event}</StyledHeader>
                })}
			</StyledDiv>
		</ParentDiv>
	);
}

export default Message;

// styled components
const ParentDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledDiv = styled(motion.div)`
	width: 500px;
	height: auto;
	background-color: #8D93AB;
    border-radius: 5px;
    padding: 15px;
    margin-top: 15px;
`;

const StyledHeader = styled(motion.h1)`
	color: white;
	text-align: center;
	line-height: 20px;
	font-size: 18px;
`;
