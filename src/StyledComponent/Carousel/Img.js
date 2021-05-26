import styled from 'styled-components'


export const Img = styled.img`
    width:100%;
    height:100%;
    opacity:0.7;
    width: 80%;
    padding-top:40px;
    @media screen and (max-width:992px){
        width: 100%;
    }
    @media screen and (max-width:768px){
        width: 80%;
        height:80%;
        padding: 0 20px;
        margin-left:30px;
    }
}
    @media screen and (max-width:576px){
        width: 90%;

    }
}


`

export const ImgBehind = styled.img`
    width:100%;
    height:550px;
    object-fit: cover;  
`

