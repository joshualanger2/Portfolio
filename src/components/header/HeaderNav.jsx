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
                                selectedColor="#839d72"
                                secondaryColor="#56644E"
                                underlineColor="#e8f19d"
                            />
                        );
                    })}
                </FlexDiv>
            </NavContainer>
        </AnimateSharedLayout>
    );
}

export default PopUpNav;