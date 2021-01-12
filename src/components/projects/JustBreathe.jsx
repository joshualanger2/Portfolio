import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import {WhiteP} from '../project-components/WhiteP'
import {openInNewTab} from '../../utility/openInNewTab'
import CloseButton from '../project-components/CloseButton'

export function JustBreathe({ id }) {
    const { category, title, backgroundColor, summary, date, image } = projects.find(project => project.id === id);

    return (
        <div className="item-container">
        <div className="card-content-container open">
            <ColorDiv backgroundColor={backgroundColor} className="card-content" layoutId={`card-container-${id}`} animate={{boxShadow: "-15px -5px 30px 15px rgba(0,0,0,0.25)"}}>
                <motion.div className="overview-container">
                    <CloseButton />
                    <motion.div
                        className="card-image-container open"
                        layoutId={`card-image-container-${id}`}
                    >
                        <motion.img style={{scale: 1.4, rotate: 45}} layoutId={`card-image-${id}`} className="project-img" src={image} alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.span className="url" onClick={() => openInNewTab('https://literallyjustbreathe.com')}>Visit website</motion.span>
                        <motion.div className="summary-container" layoutId={`summary-container-${id}`}>
                            <motion.span className="card-summary open" layoutId={`summary-${id}`}>{summary}</motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="content-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >
                    <CenteredH3 text="The Project" />
                    <WhiteP text="I have always been drawn to meditation but could never quite get into the habit of doing it consistently. Being able to qualm stress or anxiety, wake yourself up, or if you're lucky (and believe it’s possible) becoming more spiritually enlightened are all benefits that continue to draw millions of people towards meditation in the form of meditation guide products such as Headspace or Calm. In this project, I sought to understand what about meditation guide products are causing myself friction, whether others feel this way too and to see what other solutions there could be. In this project, I have so far conduced UX research, designed the iOS app UI in Sketch, created a beta with Swift and a Landing Page in Webflow. Due to COVID-19, the project was halted in 2020 but the MVP is now being developed and will be released in early 2021." />
                    <CenteredH3 text="Research" />
                    <WhiteP text="I first conducted market research to determine what products currently exist and what features they are offering. I then conducted informal interviews with users of such products to understand their experiences." />
                    <CenteredH3 text="Defining the problem" />
                    <WhiteP text="Meditation is not for everyone. I discovered that while many users were interested in the spiritual component of meditation, this was not something they were interested in attaining through a mobile app. Finally, the comittment to meditation seems like a big time investment to many people." />
                    <CenteredH3 text="The Insight" />
                    <WhiteP text="Some users want the benefit of meditation without the spiritual component or time commitment. Many meditation techniques involve breathing techniques and mental gymnastics that are backed by modern scientific experiments to provide specific benefits such as increased concentration or relaxation. These users need a way to easily learn and do these techniques." />
                    <CenteredH3 text="Creating a brand" />
                    <WhiteP text="I worked with a fellow classmate from college to create a logo in Adobe Illustrator that would be playful but in tune with the more direct scientific, and less spiritual, nature of the product. I then created a landing page using Webflow with a form connected to HubSpot via Zapier." />
                    <CenteredH3 text="Desiging a solution" />
                    <WhiteP text="The app was designed through multiple iterations using Sketch, conducting user tests and finally creating a high-fidelity prototype using Principle. These designs were then used to build a beta using Apple's Swift language in Xcode. Tests with this beta version have informed what the final MVP product will be that is currently in development." />
                    <CenteredH3 text="Next steps!" />
                    <WhiteP text="Launch of the first public build is planned for early 2021." />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
