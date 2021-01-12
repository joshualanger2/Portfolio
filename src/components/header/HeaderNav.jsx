import React from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../actions";
import { FlexDiv } from "../global/styled-components";
import NavButton from "../global/NavButton";

const NavContainer = styled(motion.div)`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                                selectedColor="#3d5a80"
                                secondaryColor="#943C9C"
                                underlineColor="#E2EC9B"
                            />
                        );
                    })}
                </FlexDiv>
            </NavContainer>
        </AnimateSharedLayout>
    );
}

export default PopUpNav;