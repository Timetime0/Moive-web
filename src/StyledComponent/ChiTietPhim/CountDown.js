import styled from "styled-components";
import Swal from 'sweetalert2'

export const DivFrameCount = styled.div`
    i{
        color:${props=>props.theme.btnPrimaryColor};
        font-size: 30px;
        padding: 0 10px;
    }
    button{
        padding: 5  10px;
        background-color:${props=>props.theme.btnPrimaryColor};
        font-size: 20px;
        border-radius: 5px;
        font-weight: bolder;
    }
`

export const SwalCut = styled(Swal)`

`

