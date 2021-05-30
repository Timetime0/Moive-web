import styled from 'styled-components'
import Popup from 'reactjs-popup';


export const ContainerLogin = styled.section`
    overflow: hidden;
    display: flex;
    flex-direcion: column;
    text-align: center;
    height: 100vh;
`

export const Content = styled.div`
    margin-bottom: 5vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direcion: column;
    padding: 80 40px;
    height: 100%;
    background-color: rgb(241 191 148 / 10%);
`

export const BgImage = styled.div`
    height: 100%;
    background-image:url("/Assets/img/login/backapp.jpg");
    background-position:top;
    background-repeat:no-repeat;
    background-size:cover;
    position: absolute;
    top:0;
    left:0;
    right: 0;
    z-index:-1;
`

export const DivFrameLogin = styled.div`
    background-color:rgb(243 101 34/ 0.4);
    border-radius: 10px;
    padding: 15px   ;
    margin-bottom: 90px;

`
export const DivImgLogin = styled.div`
    margin-bottom: 10px;
    display: flex;
    flew-flow: row nowrap;
    background-color:${props => props.inputBgColor};
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s;
    color:${props => props.inputBgColorHover};
    &:hover{
        background-color:${props => props.inputBgColorHover};
        color:${props => props.inputBgColor};
        & > .login__p{
            border-left: 1px solid ${props => props.inputBgColor};
        }
    }
`
export const LinkImgLogin = styled.div`
    cursor:pointer;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        color: ${props=>props.theme.textColor};
}
`
export const ILogin = styled.i`

`

export const PLogin = styled.p`
    margin : 0;
    padding: 0 30px;
    border-left: 1px solid  ${props => props.inputBgColor || 'white'};
`

export const DivModal = styled.div`
    position:static;
    color: black;
    display:block;
    background:#111;

`

export const PopupCu = styled(Popup)`
    &-content{
        background: #111;
        border:none;
        button.close{
            font-size:50px;
            color: ${props => props.theme.btnPrimaryColor}
        }
        @media screen and (max-width:1200px){
            width: 60%;
        }
        @media screen and (max-width:992px){
            width: 75%;
        }   
        @media screen and (max-width:768px){
            width: 80%;
        } 
        @media screen and (max-width:576px){
            width: 95%;
        } 
    }
    
`
export const ButtonModalSignUp = styled.button`
    position: absolute;
    top:0;
    right:0;
`


export const DivModalLogin = styled.div`
    max-width:50%;
    margin-top: 40px;
    width:70%;
    position:relative;
    @media screen and (max-width:1200px){
        max-width:60%;
    }
    @media screen and (max-width:992px){
        max-width:75%;
        
    }
    @media screen and (max-width:768px){
        max-width:80%;
        width:100%;
        
    }
    @media screen and (max-width:576px){
        max-width:100%;
        width:100%;
        
    }
    
`

export const DivModalContent = styled.div`
    width: 100%;
    background-color: #111;

`

export const ButtonModalLogin = styled.div`
    position:absolute;
    right:0px;
    top:-20px;
    color: ${props=>props.theme.btnPrimaryColor};
    font-size:50px;
    z-index:3;
`

export const ButtonCloseModalLogin = styled.button`
    position: absolute;
    bottom: 29px;
    right: 230px;
`