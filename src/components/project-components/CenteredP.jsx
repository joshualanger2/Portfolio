import React from 'react';
import styled from 'styled-components'

const CenteredP = styled.p`
    margin: auto;
    color: white;
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
`;

function CenteredText(props) {
    return (
    <Container>
        <CenteredP>
            {props.text}
        </CenteredP>
    </Container>)
}

export default CenteredText;