import styled from 'styled-components'

export const DivWaiting = styled.div`
    position: fixed;
    top:0;
    width:100%;
    height:100%;
    z-index:15;
    display: flex;
    justify-content: center;
    align-item:center;
    padding-top: 100px;
    opacity:1;
    background-color:rgba(255,255,255,0.5);
`

export const ImgWaiting = styled.img`
    width:80vh;
    height:60vh;
 
`