import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    height: 85vh;
    width: auto;
    margin-top: 10%;
    padding: 5%;
`;

function CenteredImage({src, alt}) {
    return (
        <Container>
            <StyledImage src={src} alt={alt} />
        </Container>
    )
}

export default CenteredImage