import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul``;

const StyledLi = styled.li`
    color: white;
    margin: 1% 0;
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