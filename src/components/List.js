import React, {useCallback} from "react";
import { projects } from "../data";
import { useHistory } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {useSelector} from "react-redux"
import {ColorDiv} from './global/styled-components'
import OpenProjectButton from './global/OpenProjectButton'


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
                <img className="project-img" src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*`} alt="" />
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
    const controls = useAnimation();
    const variants = {
        visible: { opacity: [0.5, 1], x: [50, 0]},
        hidden: { opacity: [1, 0], x: [0, -100] },
        initial: { opacity: [0.5, 1], x: 0}
    };

    if ((initialLoad === false) && (selectedTab === "projects")) {
        controls.start("initial")
    } else if ((initialLoad === true) && (selectedTab === "projects")) {
        controls.start("visible")
    } else {
        controls.start("hidden")
    }

    return (
        <motion.ul
            className="card-list"
            variants={variants}
            animate={controls}
            transition={{duration: 0.15, ease: "easeOut", type: "tween"}}
            exit={{opacity: 0, x: 50, transition: { duration: 0.15 }}}
        >
        {projects.map(project => (
            <Card key={project.id} {...project} isSelected={project.id === selectedId} />
        ))}
        </motion.ul>
  );
}
