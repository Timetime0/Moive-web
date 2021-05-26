import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export const NavLinks = styled(NavLink)`
    color:${props=>props.theme.colorLinkPrimary};
    text-decoration: none;
    font-weight: 500;
    transition: all 0.5s;
    &:hover{
        text-decoration: none;
        color:${props=>props.theme.btnPrimaryColor};
    }
`


export const Link = styled.a`
    color:${props=>props.theme.colorLinkPrimary};
    font-size: 45px;
    background: 0 0;
    height: 30px;
    width: auto;
    padding: 0 5px;
    transition: all 0.5s;
    &:hover{
        text-decoration: none;
        color:${props=>props.theme.btnPrimaryColor};
    }
    @media screen and (max-width:687px){
        font-size: 43px;
    }
`