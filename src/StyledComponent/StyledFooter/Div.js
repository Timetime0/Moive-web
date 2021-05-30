import styled from 'styled-components'

export const Img = styled.img.attrs({

})`
border-radius: 50%;
height: 30px;
width: 30px;

`
export const ImgLarge = styled(Img)`
height: 70px;
width: 70px;
padding: 5px;
@media screen and (max-width:768px){
    width: 90% !important;
    height: 60px !important;
}
@media screen and (max-width:576px){
    height: 50px !important;
    width: 90% !important;
}
`

export const ImgLeft = styled.img`
    width: 300px;
    @media screen and (max-width:1200px){
        width: 260px;
    }
    @media screen and (max-width:992px){
        width: 220px;
    }
    @media screen and (max-width:850px){
        width: 200px;
    }
    @media screen and (max-width:768px){
        width: 180px;
    }
`

export const ImgRight = styled.img`
    width: 150px;
    @media screen and (max-width:768px){

    }
`


