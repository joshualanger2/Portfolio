import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    height: 100%;
    margin: 10px 10px 0;
`;

const StyledButton = styled.button`
    outline: none;
    display: block;
    font-family: "Nunito", sans-serif;
    font-size: 36px;
    background: none;
    border: none;
    transition: 0.1s;
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
    width: 60%;
    height: 8px;
    margin-left: 20px;
    border-radius: 2px;
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
            {isSelected && (
                <UnderlineDiv layoutId="underline" color={underlineColor} />
            )}
        </Container>
    );
}

export default NavButton;
