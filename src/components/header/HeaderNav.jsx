import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../actions";
import { FlexDiv } from "../global/styled-components";
import NavButton from "../global/NavButton";

const NavContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function PopUpNav() {
    const options = ["projects", "about"];
    const dispatch = useDispatch();
    const selectedOption = useSelector(state => state.selectTab);
    return (
        <AnimateSharedLayout>
            <NavContainer className="nav-container">
                <FlexDiv>
                    {options.map(option => {
                        return (
                            <NavButton
                                isSelected={option === selectedOption}
                                onClick={() => dispatch(selectTab(option))}
                                name={option}
                                key={option}
                                selectedColor="#8D93AB"
                                secondaryColor="#FF6B6B"
                                underlineColor="#8D93AB"
                            />
                        );
                    })}
                </FlexDiv>
            </NavContainer>
        </AnimateSharedLayout>
    );
}

export default PopUpNav;