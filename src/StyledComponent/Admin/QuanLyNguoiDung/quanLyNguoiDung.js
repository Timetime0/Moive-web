import styled from 'styled-components'
import Popup from 'reactjs-popup';

export const Li = styled.li`
    cursor:pointer;
    &.active{
        & .page-link{
            background-color: ${props=>props.theme.btnPrimaryColor};
        }
    }
`

export const Trang = styled.p`
    background-color:${props=>props.theme.btnPrimaryColor};
    cursor: grab !important;
    
`
export const ButtonThem = styled.button`
    background-color:${props=>props.theme.btnPrimaryColor};
    border-color:${props=>props.theme.btnPrimaryColor};
    &:hover{
        background-color:${props=>props.theme.btnPrimaryColor};
        border-color: ${props=>props.theme.btnPrimaryColor};
    }
    &:active{
        background-color:#f5621c !important;
        border-color: #f5621c !important;
    }
    &:focus{
        background-color:#f5621c;
        border-color: #f5621c;
        box-shadow: 0 0 0 0.2rem rgb(255 87 34 / 46%);
    }
    
    
`


export const PopupCustom = styled(Popup)`
    
`


export const DivFrameSeacch = styled.div`
    position: absolute;
    right: 15px;
    background-color: white;
    color:black;
    font-weight:bolder
    top: 39px;
    width: 367px;
    height:auto;
    max-height: 200px;
    overflow-y: scroll;
`

export const DivDetailSearch = styled.div`
    cursor: pointer;
    padding: 5px 10px;
    transition: all 0.5s;
    &:hover{
        color: ${props=>props.theme.btnPrimaryColor};
        font-weight: bolder;
    }
`

export const DivModalAd = styled.div`
    max-width:100%;
    width:80%;
    position:relative;
`

export const ButtonAd = styled.div`
    position:absolute;
    right:0px;
    top:-20px;
    color: ${props=>props.theme.btnPrimaryColor};
    font-size:50px;
    z-index:3;
`
export const DivFrameBtn = styled.div`
    position: absolute;
    bottom:30px;
    right:30px;
`

