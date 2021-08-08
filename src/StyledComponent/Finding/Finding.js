import styled from "styled-components";

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
    @media screen and (max-width:1200px){
        width: 160px;
        max-height: 120px;
        
    }
`;

export const DivDetailSearch = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.theme.btnPrimaryColor};
    font-weight: bolder;
  }
`;
export const DivFramSearch = styled.div`
  position: relative;
  padding: 0;
  & .input-group-text {
    display: none;
    cursor: pointer;
    transition: all 1s;
    &:hover {
      color: ${(props) => props.theme.btnPrimaryColor};
      font-weight: bolder;
    }
    &:active {
      box-shadow: 0 5px 5px 10px ${(props) => props.theme.btnPrimaryColor};
      opacity: 1;
    }
  }
  &:hover {
    & .input-group-text {
      display: block;
    }
  }
  & .form-control {
    padding: 0.5rem 0.375rem;
  }
`;
export const Input = styled.input`
  padding: 25px !important;
`;

export const ButtonClose = styled.button``;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 88%;
  background-color: ${(props) => props.theme.btnPrimaryColor};
  border-color: ${(props) => props.theme.btnPrimaryColor};
  &:hover {
    background-color: ${(props) => props.theme.btnPrimaryColor};
    border-color: ${(props) => props.theme.btnPrimaryColor};
    box-shadow: 0 0 0 0.2rem rgb(255 87 34 / 46%);
  }
  &:active {
    background-color: #f5621c !important;
    border-color: #f5621c !important;
  }
  &:focus {
    background-color: #f5621c;
    border-color: #f5621c;
    box-shadow: 0 0 0 0.2rem rgb(255 87 34 / 46%);
  }
`;

export const DivDisplay = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
