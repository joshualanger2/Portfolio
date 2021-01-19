import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data";
import {ColorDiv} from '../global/styled-components'
import CenteredH3 from '../project-components/CenteredH3'
import {WhiteP} from '../project-components/WhiteP'
import UnorderedList from '../project-components/UnorderedList'
import CloseButton from '../project-components/CloseButton'
import CenteredImage from '../project-components/CenteredImage'
import WideImage from '../project-components/WideImage'
import alacarteUserFlow from '../../assets/alacarte-user-flow.png'
import alacarteCompetitiveAnalysis from '../../assets/alacarte-competitive-analysis.png'
import alacartePersonas from '../../assets/alacarte-personas.png'
import alacarteLowFidelity from '../../assets/alacarte-low-fidelity-ui.jpg'
import alacarteFeatures from '../../assets/alacarte-feature-prioritization.png'
import alacarteHome from '../../assets/alacarte-home.png'
import alacarteProfile from '../../assets/alacarte-profile.png'
import alacarteItem from '../../assets/alacarte-item.png'
import alacarteRestaurant from '../../assets/alacarte-restaurant.png'

export function AlaCarte({ id }) {
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
                        className="title-container open"
                        layoutId={`title-container-${id}`}
                    >
                        <motion.span className="category" layoutId={`category-${id}`}>{category}</motion.span>
                        <motion.span transition={{duration: 0.3}} className="date">{date}</motion.span>
                        <motion.h2 className="title open" layoutId={`title-${id}`}>{title}</motion.h2>
                        <motion.div className="summary-container open" layoutId={`summary-container-${id}`}>
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
                    <WhiteP text="After graduating from Bates, I knew that I was interested in taking the problem solving and communication skills I had developed into the world of product design. I decided to study UX design at General Assembly to formalize my understanding of the design process, UX research strategies and design principles that guide digital products. To graduate, each student completed a project by solving a problem through the UX design process." />
                    <CenteredH3 text="The Problem" />
                    <WhiteP text="The problem I sought to resolve was that discovering a new place to go to, especially when traveling, is a tedious experience." />
                    <UnorderedList listArray={["1. There is a flood of information online", "2. The 5 star rating system can be confusing and unreliable", "3. Trusted recommendations are scattered", "4. Recommendations from friends are often lost, forgotten or buried in messaging/notes apps"]}/>
                    <CenteredH3 text="Research" />
                    <WhiteP text="In my research, my goal was to better understand the following questions:" />
                    <UnorderedList listArray={["1. How do users currently discover new places?", "2. How do they feel about this experience? (are there any points of friction?)", "3. What factors are taken into account during the decision making process?"]} />
                    <WhiteP text="Methods" />
                    <UnorderedList listArray={["1. User Interviews", "2. Competitive Analysis"]} />
                    <CenteredH3 text="Interviews" />
                    <WhiteP text="Interviews were conducted with 10 people who consider themselves users of location discovery software. Several qualitative assessments were made based on these interviews:" />
                    <UnorderedList listArray={["1. Personal recommendations are important", "2. Younger users don’t request recommendations from friends as often because it is inconvenient, impersonal or an imposition", "3. Many users have a “note” on their phone of recommendations", "4. Photos of menu items are crucial when verifying the quality of a place"]} />
                    <CenteredH3 text="Market Analysis" />
                    <WhiteP text="A competitive analysis was conducted including a product feature breakdown to better understand the products that currently attempt to solve this problem. Here are some highlights:" />
                    <WideImage src={alacarteCompetitiveAnalysis} alt="market-research-highlights" />
                    <CenteredH3 text="Personas" />
                    <WhiteP text="From the interviews and competitive analysis, I understood that there are (at least) two kinds of users that experience this issue: Kate, the food pioneer” and “Tom, the conservative eater” A persona was created to inform the design process - below are some highlights!" />
                    <WideImage src={alacartePersonas} alt="user persona table" />
                    <CenteredH3 text="User Flow" />
                    <WhiteP text="A user flow diagram was created to outline how the user goals can be solved in an app." />
                    <WideImage src={alacarteUserFlow} alt="user flow diagram" />
                    <CenteredH3 text="The Solution - Low Fidelity Design" />
                    <WhiteP text="Next, features were prioritized to eliminate any non-essential features from the minimum viable product. Next, these features were used to guide the information architecture when sketching initial low fidelity UI designs." />
                    <WideImage src={alacarteFeatures} alt="feature prioritization matrix" />
                    <WhiteP text="Then, low-fidelity sketches were created using just pen and paper to start." />
                    <WideImage src={alacarteLowFidelity} alt="low fidelity ui sketches" />
                    <CenteredH3 text="User Testing" />
                    <WhiteP text="User tests were conducted with 5 classmates to determine if the design flow could resolve the user problem in an intuitive way." />
                    <CenteredH3 text="High Fidelity Prototype" />
                    <WhiteP text="After a final design iteration, a high fidelity prototype was created in InVision. Below are some screenshots!" />
                    <WhiteP text="The homepage - a feed where you can swipe through new recommendations from friends, accounts you follow and AlaCarte itself!" />
                    <CenteredImage src={alacarteHome} alt="alacarte high fidelity home page" />
                    <WhiteP text="Your profile - where you can organize your favorites into public or private lists for your future use or to share with friends." />
                    <CenteredImage src={alacarteProfile} alt="alacarte high fidelity profile page" />
                    <WhiteP text="Menu-item focused drilldowns for each recommended food/beverage and location!" />
                    <CenteredImage src={alacarteRestaurant} alt="alacarte high fidelity restaurant page" />
                    <CenteredImage src={alacarteItem} alt="alacarte high fidelity item page" />
                </motion.div>
            </ColorDiv>
        </div>
        </div>
    );
}
