import styled from "styled-components";

export const ImgAvt = styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
`

export const Text = styled.textarea`
    width:100%;
`

export const BtnDg = styled.button`
    padding: 10px 20px;
`

export const DivFrameComment = styled.div`
   background-color:${props=>props.theme.bgPrimaryColor};
   height: 70px;
`

export const DivRow = styled.div`
    border: 1px solid ${props=>props.theme.bgPrimaryColor};
`