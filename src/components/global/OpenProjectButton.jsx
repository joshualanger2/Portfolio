import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    position: absolute;
    padding: 3%;
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    right: 5%;
    top: 5%;
    z-index: 200;
    background-color: white;
    color: ${props => props.color};
    &:hover {
        background-color: ${props => props.color};
        color: white;
        transition: 0.1s ease-in;
        border: 1px solid white;
        cursor: pointer;
    }
    &:focus {
    outline: none;
    }
`;
function OpenProjectButton(props) {
    return(
        <StyledButton color={props.color} onClick={props.onClick}>{props.label}</StyledButton>
    );
}

export default OpenProjectButton;