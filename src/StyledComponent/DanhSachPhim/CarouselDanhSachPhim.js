import styled from 'styled-components'
import Slider from 'react-slick'


export const DivListPhimItem = styled.div`
    position:relative;
    overflow:hidden;
    height:100%;
    &:hover{
        cursor:pointer;
        .imgListPhim{
            opacity:1;
            transform: rotateZ(10deg) scale(1.3);
        }
        .divDatVe{
            opacity:1;
        }
        .listPhim__content{
            opacity:0;
        }
    }
`
export const DivDanhGia = styled.div`
    position:absolute;
    top:0;
    right:0;
    width: ${props => props.inputWidth || '65px'};
    height: 50px;
    border-radius: 10%;
    background-color: rgba(12,27,54,.8);
    padding: 10px 0px 5px;
    margin: 5px;
    color: ${props=>props.theme.textColor};
    font-weight:500;
    text-align: center;
    line-height:15px;
`
export const DivContent = styled.div`
    position:absolute;
    bottom:0;
    padding: 5px;
    transition: all 0.3s;
`



export const DivDatVe = styled.div`
    opacity:0;
    transition: all 0.5s;
    position:absolute;
    bottom:0;
    width:100%;
`

export const ImgListPhim = styled.img`
    width:100%;
    opacity:0.5;
    transition: all 0.5s;
    overflow:hidden;
`
export const DivListPhimFrame = styled.div`
    margin-top: 20px;
    padding : 10px;
    height: 200px;
    z-index:2;
    margin-right:20px;
`

export const ButtonListPhim = styled.button`
    width:100%;
    background-color:${props=>props.theme.btnPrimaryColor};
    color:${props=>props.theme.textColor};
    font-weight:bold;
    &:hover{
        background-color:#fff;
        color:${props=>props.theme.btnPrimaryColor};
    }
`

export const DivColorStar = styled.span`
    i{
        font-size:50px;
    };
    .fa{
        color:${props => props.inputColorFa || '#ffffff57'}; 

    };
     .color{
         color:${props => props.inputColor || '#f36522'};
     };
`

export const SliderCostum = styled(Slider)`
    margin-top:60px;
    @media screen and (max-width:768px){
        .slick-dots{
            right: 0px;
            bottom: -50px;
        }
    }
    @media screen and (max-width:576px){
        .slick-dots{
            right: 0px;
            bottom: -65px;
        }
    }
    @media screen and (max-width:540px){
        .slick-dots{
            right: 0px;
            bottom: -80px;
        }
    }
    
`
export const DivArrow = styled.div`
    cursor:pointer;
    font-size:55px;
    font-weight:bolder;
    position: absolute;
    width:50%;
    right:0px;
    top: 40%;
    .previous{
        position: absolute;
        left:-20px;
    }
    .next{
        position: absolute;
        right:-20px;
    }
    i{
        color: #f365228c;
        transition: all 0.5s;
        &:hover{
            color: ${props=>props.theme.btnPrimaryColor};
        }
    }
    @media screen and (max-width:768px){
         top: 75%;
        .previous{
            left:40%;
        }
        .next{
            right:40%;
        }
    }
    @media screen and (max-width:576px){
        top: 73%;
        .previous{
            left:35%;
        }
        .next{
            right:35%;
        }
    }
   
`