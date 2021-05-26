import styled from 'styled-components'


export const ImgLogoCumRap = styled.img`
    width:100px;
    @media screen and (max-width:768px){
        width:80px;
    }
`

export const DivScreen = styled.span`
    border-bottom: 20px solid ${props=>props.theme.btnPrimaryColor};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    width:80px;
    padding:5px;
    filter: drop-shadow(4px 15px 20px rgba(255, 255, 255, 0.5));
    font-size: 18px;
    color: white;
    text-align:center;
    @media screen and (max-width:768px){
        font-size: 15px;
    }
`

export const DivChiTietRap = styled.div`
    height: auto;
    padding-bottom: 70px;
`