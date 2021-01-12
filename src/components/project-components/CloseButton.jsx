import React, {useCallback} from 'react'
import {motion} from 'framer-motion'
import closeButtonSVG from '../../assets/project-close-button.svg'
import { useHistory } from "react-router-dom";

function CloseButton() {
    const history = useHistory();
    const handleClose = useCallback(() => history.push(`/`), [history])
    return (
        <motion.button whileHover={{scale: 1.2}} className="close-button" onClick={handleClose}>
            <img src={closeButtonSVG} alt="close-button"/>
        </motion.button>
    )
}

export default CloseButton;