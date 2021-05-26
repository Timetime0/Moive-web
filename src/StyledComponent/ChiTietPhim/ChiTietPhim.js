import styled from 'styled-components'

export const ImgChiTiet = styled.img`
    width:75%;
    @media screen and (max-width:992px){
        width:95%;
    }
    @media screen and (max-width:768px){
        width:100%;
    }
    @media screen and (max-width:576px){
        width:60%;
    }
`

export const ImgBgChiTiet = styled.img`
    width:100%;
    display:block;
    position:absolute;
    height: 100vh;
`

export const DivBgChiTiet = styled.div`
    position:relative;
    opacity:1;
    background-image: url(${(props)=>props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    height: 630px;
    width:100%;
    &:after{
            content: '';
            background: linear-gradient(to top,rgb(125 48 24),transparent 100%);
            display: block;
            height: 100%;
            position: absolute;
            width: 100%;
        }
    }
    @media screen and (max-width:1200px){
        height: 550px;
    }
    @media screen and (max-width:992px){
        height: 540px;
    }
    @media screen and (max-width:768px){
        height: 740px;
    }
    @media screen and (max-width:576px){
        height: 940px;
    }
`

export const DivHeader = styled.div`
    padding:100px 0;
    @media screen and (max-width:768px){
        padding-bottom:10px
    }
`

export const SpanImgInner = styled.span`
    padding-right:0;
    text-align:center;
    width:80%;
    position:relative;
    &:hover{
      .divPlay {
        opacity:1;
        color: ${props=>props.theme.btnPrimaryColor};
      }
    }
`

export const DivPlay = styled.div`
    cursor:pointer;
    position:absolute;
    top:40%;
    font-size:75px;
    left:160px;
    color:${props=>props.theme.textColorSecond};;
    opacity:0;
    transition: all 0.5s;
    @media screen and (max-width:1200px){
        font-size:70px;
        top:30%;
        left:130px;
    }
    @media screen and (max-width:992px){
        font-size:70px;
        left:90px;
    }
    @media screen and (max-width:768px){
        font-size:70px;
        left:110px;
    }
    @media screen and (max-width:576px){
        font-size:80px;
        left:43%;
        top:35%;
    }
`
export const DivContent = styled.div`

`

export const CircleIn = styled.div`
    position: relative;
    width: 120px;
    height:120px;
    border-radius:50%;
    border: 1px solid transparent;
    background-color:rgba(0,0,0,.4) ;
`

export const CirclePut = styled.div`
    position: absolute;
    width: 100px;
    height:100px;
    border-radius:50%;
    border: 1px solid transparent;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:rgba(0,0,0,.4);
    z-index:5;
`


export const Rate = styled.div`
    position: absolute;
    font-weight: bolder;
    font-size:50px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%)
`
export const CircleBar = styled.div`
    position: absolute;
    border: .06em solid ${props=>props.theme.btnPrimaryColor};
    width: 100%;
    height: 100%;
    clip: rect(0,.5em,1em,0);
    border-radius: 50%;
    transform: rotate(${props=>props.Deg});
`

export const CircleFill = styled.div`
    position: absolute;
    border:.06em solid ${props=>props.theme.btnPrimaryColor};
    width: 100%;
    height: 100%;
    clip: rect(0,.5em,1em,0);
    border-radius: 50%;
    transform: rotate(180deg);
`
export const Slice = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size:126px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`
export const Star = styled.div`
    text-align:center;
    .divColorStar{
        i{
            font-size:25px !important;
            color:${props=>props.theme.btnPrimaryColor};
        }
       
    }
`

export const DivBody = styled.div`
    // padding-top:240px !important; 
    background-color: #7e3119;
    font-weight:bolder;
    .nav-link.active{
        background-color:${props=>props.theme.btnPrimaryColor};
    }
    @media screen and (max-width:576px){
        padding-top:70px !important;

        // padding-top:310px !important;
    }
`

export const H1Phim = styled.h1`
    @media screen and (max-width:1200px){
        font-size:33px;
    }
    @media screen and (max-width:768px){
        font-size:29px;
    }
    @media screen and (max-width:576px){
        font-size:25px;
    }
`

export const SpanContent = styled.span`
    @media screen and (max-width:576px){
        display:block !important;
        padding-top:10px;
        text-align:center;
    }
`
