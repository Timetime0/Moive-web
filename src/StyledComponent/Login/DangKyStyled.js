import styled from 'styled-components'


export const BookingContent = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding-top:30px;
`

export const BookingImg = styled.div`
    width: 60%;
    margin-bottom: -8px;
    text-align:center
`


export const BookingImgAdmin = styled.div`
    width: 70%;
    margin-bottom: -8px;
    padding-left:10px;
`


export const BookingImgPhimAdmin = styled.div`
    width: 100%;
    margin-bottom: -8px;
    padding-left:10px;
`


export const BookingForm = styled.div`
    width: 40%;
    height:500px;
    background: #111;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color:${props=>props.theme.btnPrimaryColor};
`

export const BookingFormAd = styled(BookingForm)`
    height:550px;
    width: 30%;
   dislay:flex;
   justify-content: flex-end;
`
export const BookingFormPhimAd = styled(BookingForm)`
    height:550px;
    width: 100%;
   dislay:flex;
   justify-content: flex-end;
`

export const BookingFormAdmin = styled.div`
    width: 30%;
    height:500px;
    background: #111;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color:${props=>props.theme.btnPrimaryColor};
`

export const FormRadio = styled.div`
    width: 41.67%;
    background: #111;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const Form = styled.form`
    padding: 15px 30px 20px 20px;
    @media screen and (max-width:576px){
        padding: 15px 5px 20px 10px;
    }
`
export const FormLogin = styled.form`
    padding: 50px 20px 20px 20px;
    @media screen and (max-width:576px){
        padding:50px 5px 20px 10px;
    }
`

export const FormPhimAd = styled.form`
    padding: 20px 30px 20px 30px;
`

export const FormGroup = styled.div`
    margin-bottom: 10px;
    position: relative;
`

export const FormInput = styled(FormGroup)`
    height: 60px;
    .displayNone{
        display:none;
    };
    .form-label{
        position: absolute;
        transition: 0.25s ease;
        color: ${props=>props.theme.btnPrimaryColor};
        left: 0;
        top: 23px;
    };
    input{
        box-shadow: 0 0 0 30px transparent inset;
        &::input-placeholder{
            color: grey;
        }
        box-sizing: border-box;
        width: 100%;
        display: block;
        border: none;
        font-family: Poppins;
        color: #fff;
        background: transparent;
        border-bottom: 1px solid ${props=>props.theme.btnPrimaryColor};
        padding: 4px 0;
        &:focus {
            border-bottom: 1px solid yellow;
        }
        transition: 0.3s ease;
        padding-top: 15px;
        &:focus + .form-label,  &:valid + .form-label{
            top: 1px;
            font-size: 11px;
            color: yellow;
            border:none
        }
    };
  
`

export const Submit = styled.input`
    width: auto;
    background: yellow;
    color: #fff;
    padding: 15px 43px;
    font-weight: bold;
    border: none;
    border-radius:5px;
    cursor: pointer;
    &:hover {
        background: darken($yellow-color, 10%);
    }
`

export const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: 0 0;
    z-index: 9;
    border-bottom: 1px solid #999;
    padding-top: 15px;
    position: absolute;
    width: 100%;
    #time{
        z-index: 99;
    }
    #food {
        z-index: 9;
    }
`

export const Link = styled.a`
    color: yellow;
    font-size: 11px;
    text-decoration: none;
    margin-top: 14px;
    display: block;
    transition: all 0.3s;
    &:hover {
        text-decoration: underline;
    }
`


export const SelectList = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 47px;
`

export const Img = styled.img`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

`
 export const ListItem = styled.ul`
    position: absolute;
    width: 100%;
 `

export const Li = styled.li`
    // &:not(.init){
    //     display: none; 
    //     background: #fff;
    //     color: $black-color;
    //     padding: 5px 10px; 
    // }
    // &:not(.init){
    //     &:hover{
    //         background: $yellow-color;
    //     }
    // }   
    .selected{
        &:hover{
            background: $yellow-color;
        }
    }

`

export const Select =styled.select`
    background-color:black !important;
    border: 1px solid ${props=>props.theme.btnPrimaryColor};
    color:  ${props=>props.theme.textColor};
    margin-top:10px;
    &:focus{
        border: 1px solid ${props=>props.theme.btnPrimaryColor} !important ;
        color: ${props=>props.theme.btnPrimaryColor }  !important;
        box-shadow: 0 0 0 0.2rem rgb(232 142 114 / 50%);
    }
`  

export const ButtonCloseAd = styled.button`
    position: absolute;
    bottom: 29px;
    right: 230px;
`

export const ButtonCloseAdPhim = styled.button`
    position: absolute;
    bottom: 30px;
    right: 130px;
`
export const PFile = styled.span`
    margin-left: 20px;
    color: yellow;
` 

export const ImgFile = styled.img`
    margin-left: 20px;
    width:150px;
    height:150px;

` 
export const DivFile = styled.div`
    margin-top: 35px;
` 
export const MessageErrors = styled.p`
    color: red;
`
