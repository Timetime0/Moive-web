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
    margin-bottom: 10vh;
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
    width: 25%;
    background-color:rgb(243 101 34/ 0.4);
    border-radius: 10px;
    padding: 15px   ;
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
    }
    
`