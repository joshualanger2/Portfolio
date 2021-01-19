import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
    margin: 5% 0;
    @media only screen and (max-width: 600px) {
        text-align: center;
        padding: 0 5%;
    }
`;

const StyledLi = styled.li`
    color: white;
    margin: 2% 0;
    padding-left: 3%;
    font-weight: 600;
`;

function UnorderedList({listArray}) {
    return (
        <StyledUl>
            {listArray.map(listItem =>
                <StyledLi>{listItem}</StyledLi>
            )}
        </StyledUl>
    )
}

export default UnorderedList;