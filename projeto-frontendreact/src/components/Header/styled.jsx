import styled from 'styled-components'
import starBackground from "../../assets/images/star.png";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 20vh;
    background-image: url(${starBackground});
`
export const ImgLogo = styled.img`
    height: 15vh;
    width: 50vw;
`