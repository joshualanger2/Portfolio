import React, {useState} from "react";
import styled from "styled-components";
import {HorizontalSpacer} from "../global/styled-components"
import HeaderNav from "./HeaderNav";
import logo from "../../assets/logo.svg";
import {useSelector} from "react-redux"
import useDocumentScrollThrottled from "../../useDocumentScrollThrottled"

const Logo = styled.img`
    margin-top: 20px;
    width: 300px;
    height: auto;
    display: block;
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 102;
    width: 100%;
    max-width: 300px;
    height: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
`;

const HeaderBackground = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 200px;
    z-index: 101;
    background-color: ${props => props.project === "" ? "#f1f3f8" : "none"};
    pointer-events: none;
    -webkit-mask-image: -webkit-gradient(linear, left top,
    left bottom, from(rgba(241, 243, 248, 1)), to(rgba(241, 243, 248, 0)));
`;

function Header() {
    const selectedProject = useSelector(state => state.selectProject);
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const hidden = shouldHideHeader ? 'hidden' : '';
    const MINIMUM_SCROLL = 20;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldHideHeader((isScrolledDown && isMinimumScrolled) || (!isScrolledDown && isMinimumScrolled));
    });

    return (
        <>
        <HeaderBackground project={selectedProject}/>
        <StyledHeader className={`${hidden}`}>
                <Logo src={logo} alt="logo"/>
                <HorizontalSpacer />
                <HeaderNav />
        </StyledHeader>
        </>
    )};

export default Header;