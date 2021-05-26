import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

export const ImgLogo = styled.img`
    width: 180px;
`


//#0b1621
export const NavLinkT = styled(NavLink)`
    font-size:20px;
    transition: all 0.56s;
    margin: 0 10px;
    &:after{
        content:"";
        height:3px;
        display:block;
        width:0%;
        background-color: ${props => props.theme.btnPrimaryColor} ;
        transition: all 0.5s;
        margin:auto
        }
    &:hover{
        color: ${props => props.theme.btnPrimaryColor} !important;
        &:after{
            width:100%;
       }
    };
    &.active{
        color:${props => props.theme.btnPrimaryColor} !important;
        &:after{
            content:"";
            height:3px;
            display:block;
            width:100%;
            background-color: ${props => props.theme.btnPrimaryColor} ;
            margin:auto
            }
    }
    @media screen and (max-width:992px){
        margin: 0px;
        font-size:18px;
    }
`

export const NavHashLinkT = styled(NavHashLink)`
cursor:pointer;
display:block;
font-size:20px;
transition: all 0.56s;
margin: 0px 10px;
color:rgba(255,255,255,.5);
&:after{
    content:"";
    height:3px;
    display:block;
    width:0%;
    background-color: ${props => props.theme.btnPrimaryColor} ;
    transition: all 0.5s;
    margin:auto
    }
&:hover{
    color: ${props => props.theme.btnPrimaryColor} !important;
    &:after{
        width:100%;
   }
};
&.active{
    color:${props => props.theme.btnPrimaryColor} !important;
    &:after{
        content:"";
        height:3px;
        display:block;
        width:100%;
        background-color: ${props => props.theme.btnPrimaryColor} ;
        margin:auto
        }
}
@media screen and (max-width:992px){
    margin: 0px;
    font-size:18px;
}
`

export const BtnHeader = styled.button`
    border: 1px solid  ${props => props.theme.btnPrimaryColor};
    color: ${props => props.theme.btnPrimaryColor};
    &:hover{
        background-color: ${props => props.theme.btnPrimaryColor};
        border: 1px solid  ${props => props.theme.btnPrimaryColor};
    }
    &:active{
        background-color: ${props => props.theme.btnPrimaryColor} !important;
        border: 1px solid  ${props => props.theme.btnPrimaryColor} !important;
    }
    &:focus{
        color:white;
        background-color:#f5621c;
        border-color: #f5621c;
        box-shadow: 0 0 0 0.2rem rgb(255 87 34 / 46%);
    }
`

export const Nav = styled.nav`
    background-color: #0b1621;
`

