import React from 'react';
import styled from 'styled-components'


const CenteredP = styled.h3`
    margin: 50px auto;
    color: #f1f3f8;
    font-size: 36px;
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    display: flex;
`;

function CenteredH3(props) {
    return (
    <Container>
        <CenteredP>
            {props.text}
        </CenteredP>
    </Container>)
}

export default CenteredH3;