import React, {useCallback} from "react";
import { projects } from "../data";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {ColorDiv} from './global/styled-components'
import OpenProjectButton from './global/OpenProjectButton'
import styled from "styled-components";

const Container = styled(motion.div)`
    min-width: 100vw;
    height: auto;
    padding: 45px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChildContainer = styled.div`
    max-width: 990px;
    flex: 1 1 100%;
    padding: 45px 25px;
`;

const CardListItem = styled(motion.li)`
    position: relative;
    padding: 25px;
    height: ${props => props.size === "large" ? "560px" : "350px"};
    flex: 0 0 40%;
    max-width: 40%;
    @media only screen and (max-width: 1000px) {
        flex: 1 0 100%;
        max-width: 100%;
        padding: 40px;
        height: 560px;
    }
    @media only screen and (max-width: 600px) {
        height: ${props => props.size === "large" ? "560px" : "350px"};
        padding: 10px;
        margin-top: 20px;
    }
`;

function Card({ id, title, category, backgroundColor, summary, buttonLabel, image, size }) {
    const history = useHistory();
    const handleClick = useCallback(() => history.push(`/${id}`), [history, id])
    return (
        <CardListItem size={size} whileHover={{scale: 1.1}}>
        <div className="card-content-container">
            <ColorDiv
                backgroundColor={backgroundColor}
                className="card-content"
                layoutId={`card-container-${id}`}
                animate={{boxShadow: "-10px -10px 20px 10px rgba(0,0,0,0.1)"}}
                whileHover={{boxShadow: "-20px -10px 30px 15px rgba(0,0,0,0.2)"}}
            >
            <OpenProjectButton label={buttonLabel} color={backgroundColor} onClick={handleClick}/>
            <motion.div
                className="card-image-container closed"
                layoutId={`card-image-container-${id}`}
            >
                <motion.img layoutId={`card-image-${id}`} className="project-img" src={image} alt="" />
            </motion.div>
            <motion.div
                className="title-container"
                layoutId={`title-container-${id}`}
            >
                <motion.span className="category closed" layoutId={`category-${id}`}>{category}</motion.span>
                <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                <motion.div className="summary-container" layoutId={`summary-container-${id}`}>
                    <motion.span className="card-summary" layoutId={`summary-${id}`}>{summary}</motion.span>
                </motion.div>
            </motion.div>
            </ColorDiv>
        </div>

        </CardListItem>
    );
    }

export function List({ selectedId }) {

    return (
        <Container>
        <ChildContainer>
        <motion.ul
            className="card-list"
        >
            {projects.map(project => (
                <Card key={project.id} {...project} isSelected={project.id === selectedId} />
            ))}
        </motion.ul>
        </ChildContainer>
        </Container>
  );
}
