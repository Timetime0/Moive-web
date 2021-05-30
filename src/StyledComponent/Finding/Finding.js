import styled from 'styled-components'

export const DivSeacchPhim = styled.div`
    position: absolute;
    z-index:10;
    left: 0px;
    background-color: white;
    color:black;
    font-weight:bolder
    top: 39px;
    width: 190px;
    height:auto;
    max-height: 150px;
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
export const DivFramSearch = styled.div`
    position: relative;
    padding:0;
    & .input-group-text{
        display:none;
        cursor: pointer;
        transition: all 1s;
        &:hover{
            color:  ${props=>props.theme.btnPrimaryColor};
            font-weight: bolder;
        }
        &:active{
            box-shadow: 0 5px 5px 10px  ${props=>props.theme.btnPrimaryColor};
            opacity: 1;
        }
    }
    &:hover{
        & .input-group-text{
            display:block;
        }
    }
`