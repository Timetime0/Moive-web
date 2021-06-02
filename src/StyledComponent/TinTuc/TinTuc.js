import styled from 'styled-components'

export const LinkTinTuc = styled.a`

    color: ${props=>props.theme.btnPrimaryColor};
    &:hover{
        color:${props=>props.theme.btnPrimaryColor};
    }
    &.active{
        font-weight: bolder;
        color: ${props=>props.theme.textColor} !important;
        background-color: ${props=>props.theme.btnPrimaryColor}  !important;
        border: 1px solid ${props=>props.theme.btnPrimaryColor}  !important;
    }
`

export const DivTinTuc = styled.div`
    padding-top:85px;
`