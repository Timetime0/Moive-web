import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';

export const ImgLogo = styled.img`
    width: 180px;
    @media screen and (max-width:992px){
        width: 150px;
    }
    @media screen and (max-width:576px){
        width: 120px;
    }
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
    @media screen and (max-width:1200px){
        margin: 0px;
        font-size:18px;
    }
    @media screen and (max-width:992px){
        margin: 0px;
        font-size:16px;
    }
    @media screen and (max-width:850px){
        margin: 0px;
        font-size:14px;
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

@media screen and (max-width:1200px){
    margin: 0px;
    font-size:18px;
}
@media screen and (max-width:992px){
    margin: 0px;
    font-size:16px;
}
@media screen and (max-width:850px){
    margin: 0px;
    font-size:14px;
}
`

export const BtnHeader = styled.button`
    font-weight:bolder;
    border: 1px solid  ${props => props.theme.btnPrimaryColor};
    color: ${props => props.theme.btnPrimaryColor};
    transition: all 0.3s;
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
    @media screen and (max-width:1200px){
        font-size: 16px;
    }
    @media screen and (max-width:992px){
        font-size: 14px;
    }
    @media screen and (max-width:576px){
        font-size: 12px;
        padding:5px 5px;
    }
`

export const Nav = styled.nav`
    background-color: #0b1621;
`
export const ButtonToggle = styled.button`
    @media screen and (max-width:576px){
        font-size: 12px;
        padding: 5px 5px;
    }
`
