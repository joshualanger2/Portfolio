import React from "react";
import { projects } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {ColorDiv} from './components/global/styled-components'

function Card({ id, title, category, backgroundColor, summary }) {
  return (
    <li className={`card`}>
      <div className="card-content-container">
        <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
            <span className="card-summary">{summary}</span>
          </motion.div>
        </ColorDiv>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {projects.map(project => (
        <Card key={project.id} {...project} isSelected={project.id === selectedId} />
      ))}
    </ul>
  );
}
