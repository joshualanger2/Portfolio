import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    height: auto;
    width: 120%;
    object-fit: contain;
    margin-top: 10%;
    @media only screen and (max-width: 1000px) {
        width: 100%;
        padding: 3%;
    }
`;

function WideImage({src, alt}) {
    return (
        <Container>
            <StyledImage src={src} alt={alt} />
        </Container>
    )
}

export default WideImage