import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredP from '../project-components/CenteredP'

export function Fishing({ id }) {
  const { category, title, backgroundColor, summary, date } = projects.find(project => project.id === id);

  return (
    <div className="item-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
            <div className="overview-container">
                <motion.div
                    className="card-image-container open"
                    layoutId={`card-image-container-${id}`}
                >
                    <img className="project-img" src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*`} alt="" />
                </motion.div>
                <motion.div
                    className="title-container"
                    layoutId={`title-container-${id}`}
                >
                    <span className="category">{category}</span>
                    <h2>{title}</h2>
                    <span className="date">{date}</span>
                    <div className="summary-container">
                        <span className="card-summary open">{summary}</span>
                    </div>
                </motion.div>
            </div>
            <motion.div className="content-container" animate>
                <CenteredP text="The Problem" />
                <p>Overfishing is leading to the decimation of fish populations. This will cause fish and other dependent organisms to go extinct as a result.</p>
            </motion.div>
        </ColorDiv>
      </div>
    </div>
  );
}
