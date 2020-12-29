import React, {useCallback} from "react";
import { projects } from "../data";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {useSelector} from "react-redux"
import {ColorDiv} from './global/styled-components'
import OpenProjectButton from './global/OpenProjectButton'
import styled from "styled-components";
import fishingGIF from '../assets/fishing-app-ui.gif'

const Container = styled(motion.div)`
    min-width: 100vw;
    height: auto;
    padding: 45px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


function Card({ id, title, category, backgroundColor, summary, buttonLabel }) {
    const history = useHistory();
    const handleClick = useCallback(() => history.push(`/${id}`), [history])
    return (
        <motion.li className={`card`} whileHover={{scale: 1.1}}>
        <div className="card-content-container">
            <ColorDiv
                backgroundColor={backgroundColor}
                className="card-content"
                layoutId={`card-container-${id}`}
                animate={{boxShadow: "-10px -5px 15px 10px rgba(0,0,0,0.15)"}}
                whileHover={{boxShadow: "-20px -10px 30px 15px rgba(0,0,0,0.35)"}}
            >
            <OpenProjectButton label={buttonLabel} color={backgroundColor} onClick={handleClick}/>
            <motion.div
                className="card-image-container closed"
                layoutId={`card-image-container-${id}`}
            >
                <motion.img layoutId={`card-image-${id}`} className="project-img" src={fishingGIF} alt="" />
            </motion.div>
            <motion.div
                className="title-container"
                layoutId={`title-container-${id}`}
            >
                <span className="category">{category}</span>
                <h2 className="title">{title}</h2>
                <span className="card-summary">{summary}</span>
            </motion.div>

            </ColorDiv>
        </div>

        </motion.li>
    );
    }

export function List({ selectedId }) {
    const selectedTab = useSelector(state => state.selectTab);
    const initialLoad = useSelector(state => state.initialLoad);

    return (
        <Container>
        <div className="container">
        <motion.ul
            className="card-list"
        >
        {projects.map(project => (
            <Card key={project.id} {...project} isSelected={project.id === selectedId} />
        ))}
        </motion.ul>
        </div>
        </Container>
  );
}
