import styled from "styled-components";

export const DivbackToTop = styled.div`
    position:fixed !important;
    right: 30px;
    bottom: 30px;
    cursor:pointer;

`

export const BtnbackToTop = styled.div`
    background-color: transparent;
    font-size: 30px;
    color:${props=>props.theme.btnPrimaryColor};
    &:hover{
        i{
            box-shadow: 0 5px 5px 10px ${props=>props.theme.btnPrimaryColor};
        }
      
    }
`