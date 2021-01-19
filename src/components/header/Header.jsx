import React, {useState} from "react";
import styled from "styled-components";
import {HorizontalSpacer} from "../global/styled-components"
import HeaderNav from "./HeaderNav";
import logo from "../../assets/logo.png";
import {useSelector} from "react-redux"
import useDocumentScrollThrottled from "../../utility/useDocumentScrollThrottled"

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
    width: 100%;
    max-width: 300px;
    height: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
`;

const HeaderBackground = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100px;
    background-color: #f1f3f8;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
`;

function Header() {
    const selectedProject = useSelector(state => state.selectProject);

    // * Hide Header
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    let hidden = shouldHideHeader || selectedProject !== "" ? 'hidden' : '';
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