import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
    color: #f1f3f8;
    @media only screen and (max-width: 800px) {
        text-align: center;
        padding: 0 5%;
    }
`;

export const WhiteP = props => <StyledP>{props.text}</StyledP>