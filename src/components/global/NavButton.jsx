import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    height: 100%;
    margin: 0 10px;
    position: relative;
`;

const StyledButton = styled.button`
    outline: none;
    display: block;
    font-size: 24px;
    background: none;
    border: none;
    transition: 0.1s;
    z-index: 2;
    width: 100%;
    color: ${props => props.selectedColor};
    font-weight: 700;
    &:hover {
        cursor: pointer;
        color: ${props => props.secondaryColor}
    }
`;

const UnderlineDiv = styled(motion.div)`
    display: block;
    position: absolute;
    width: 110%;
    top: 10px;
    z-index: -1;
    height: 25px;
    border-radius: 3px;
    opacity: 0.8;
    background-color: ${props => props.color};
`;

function NavButton({
    onClick,
    isSelected,
    name,
    selectedColor,
    secondaryColor,
    underlineColor
}) {
    return (
        <Container>
            <StyledButton
                isSelected={isSelected}
                onClick={onClick}
                selectedColor={selectedColor}
                secondaryColor={secondaryColor}
            >
                {name}
            </StyledButton>
            {isSelected && (<UnderlineDiv layoutId="underline" color={underlineColor} />)}
        </Container>
    );
}

export default NavButton;
