import styled from 'styled-components'

export const DivBgQuangCao = styled.div`
    background-image: url('/Assets/img/login/bg2.jpg');
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    height: 100%;
    width:100%;
    position:relative;
    &:before{
        background: linear-gradient(to top, rgba(242, 101, 34, 0.51) 10%, rgba(10, 21, 33, 0.3) 75%);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
    }
`

export const ImgQuangCao = styled.img`
    width:100%;
    display:block;
    border-radius: 30px;

`

export const ImgQuangCao1 = styled.img`
    width:100%;
    height:100%;
    border-radius:30px;
    border: 1px solid transperent;

`

export const DivContainerQuangCao = styled.div`
   padding: 100px 50px;
   
   height:100%;
   @media screen and (max-width:786px){
    padding: 20px 0px;
}
`

export const DivFrameRight =  styled.div`
    width: 65%;
  
    padding-left:55px;
    @media screen and (max-width:992px){
        width: 90%;
    }
    @media screen and (max-width:786px){
        width: 60%;
        margin-left:65px
    }
`
export const FrameLeft =  styled.div`
    padding: 50px;
    a{
        font-weight:bolder;
        text-decoration:underline;
        transition: all 0.3s;
        &:hover{
            color: ${props=>props.theme.btnPrimaryColor};
        }
    }

`
export const Frame =  styled.div`
    height: 100%;
`

export const DivPositionCarousel =  styled.div`
    width:100%;
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;
    right:0;
`
export const DivImgInside = styled.div`
    border-radius: 30px;
    overflow:hidden;
    position:relative;
`
export const ButtonQuangCao = styled.button`
    font-weight:bolder;
    color:${props=>props.theme.textColor};
    background-color:${props=>props.theme.btnPrimaryColor};
    border:1px solid ${props=>props.theme.btnPrimaryColor};
    &:hover{
        color:${props=>props.theme.btnPrimaryColor};
        background-color:${props=>props.theme.textColorSecond};
    }
`

