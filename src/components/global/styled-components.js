import styled from 'styled-components'
import {motion} from 'framer-motion'

export const FlexDiv = styled.div`
    display: flex;
    justify-content: ${props => props.centered && "center"};
    @media only screen and (max-width: 400px) {
        flex-direction: row;
    }
`;

export const HorizontalSpacer = styled.div`
    width: 100%;
`;

export const ColorDiv = styled(motion.div)`
    background-color: ${props => props.backgroundColor};
`;