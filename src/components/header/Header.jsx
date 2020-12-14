import * as React from "react";
import styled from "styled-components";
import {HorizontalSpacer} from "../global/styled-components"
import HeaderNav from "./HeaderNav";
import logo from "../../assets/logo.svg";


const Logo = styled.img`
    width: 300px;
    height: auto;
    display: flex;
`;

export const Header = () => (
  <header>
    <Logo src={logo} alt="logo"/>
    <HorizontalSpacer />
    <HeaderNav />
  </header>
);
