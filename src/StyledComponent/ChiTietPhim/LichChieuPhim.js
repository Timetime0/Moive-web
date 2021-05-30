import styled from 'styled-components'



export const DivFrameLogoLCP = styled.div`

`

export const ImgLogoRap = styled.img`
    width:50%;
    cursor:pointer;
    border-radius:50%;
    border: 1px solid transparent;
    &:hover{
        box-shadow: 3px 5px 5px ${props=>props.theme.btnPrimaryColor};
    };
    &.active{
        box-shadow: 0 3px 10px 10px black;
    }
`

export const DivFrameLogoRap = styled.div`
    text-align:center;
    width:100%;
    height:auto;
`

export const ImglogoLCP = styled.img`
    width: 70px;
    cursor:pointer;
    border-radius:50%;

    &.active{
        box-shadow: 0 3px 10px 10px black;
    }
`

export const PlogoLCP = styled.p`
    font-size:15px;
    margin: 5px 0 10px;
`

export const Btn = styled.button`
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

`