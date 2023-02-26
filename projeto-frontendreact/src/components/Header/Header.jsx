import React from "react";
import { HeaderContainer, ImgLogo } from "./styled";
import Logo from "../../assets/images/Logo.png"

export function Header(){
    return(
        <HeaderContainer>
            <ImgLogo src={Logo} alt="logo" />
        </HeaderContainer>
    )
}