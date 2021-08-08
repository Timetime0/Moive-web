import styled from "styled-components";
import Popup from "reactjs-popup";

export const DivChiTietFrame = styled.div`
  padding: 40px 100px;
  height: 650px;
  @media screen and (max-width: 1200px) {
    padding: 100px 100px;
    height: 650px;
  }
  @media screen and (max-width: 992px) {
    padding: 100px 50px;
    height: 650px;
  }
  @media screen and (max-width: 786px) {
    padding: 100px 30px;
    height: 650px;
  }
  @media screen and (max-width: 576px) {
    padding: 100px 0px;
    height: 650px;
  }
`;

export const ImgChiTiet = styled.img`
  width: 100%;
  background-size: cover;
`;

export const DivPhimContent = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 710px) and (min-width: 605px) {
    h3 {
      font-size: 30px;
    }
  }
`;

export const DivPlay = styled.div`
  z-index: 100;
  position: absolute;
  top: 150px;
  left: 25%;
  padding-left: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 50px;
  transition: all 0.5s;
  width: 80px;
  height: 80px;
  line-height: 75px;
  border: 2px solid white;
  border-radius: 50%;
  opacity: 0;
  &:hover {
    border: 2px solid ${(props) => props.theme.btnPrimaryColor};
    color: ${(props) => props.theme.btnPrimaryColor};
    a {
      color: ${(props) => props.theme.btnPrimaryColor};
    }
  }
  @media screen and (max-width: 1200px) {
    left: 15%;
    top: 100px;
  }
  @media screen and (max-width: 768px) {
    left: 10%;
    top: 80px;
  }
  @media screen and (max-width: 650px) {
    width: 60px;
    font-size: 35px;
    height: 60px;
    line-height: 55px;
    left: 10%;
    top: 60px;
  }
  @media screen and (max-width: 576px) {
  }
`;

export const DivHoverPopup = styled.div`
  text-align: left;
  position: absolute;
  width: 150%;
  color: ${(props) => props.theme.textColorSecond};
  height: 400px;
  top: 15%;
  right: -560px;
  z-index: 1;
  visibility: hidden;
  .speech-bubble {
    padding: 10px;
    position: relative;
    background-color: ${(props) => props.theme.btnPrimaryColor};
    border-radius: 1em;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-right-color: ${(props) => props.theme.btnPrimaryColor};
      border-left: 0;
      margin-top: -20px;
      margin-left: -20px;
    }
  }
  @media screen and (max-width: 1200px) {
    right: -450px;
  }
  @media screen and (max-width: 1199px) {
    right: -430px;
  }
  @media screen and (max-width: 992px) {
    right: -400px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
export const DivImgChiTiet = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: pointer;
  &:hover {
    .divHoverPopup {
      visibility: visible;
    }
    .divPlay {
      opacity: 1;
    }
  }
`;

export const DivCount = styled.div``;

export const DivLinkYoutube = styled.div`
  display: block;
  position: static;
  text-align: center;
  .close {
    font-size: 30px;
    color: ${(props) => props.theme.btnPrimaryColor};
    border: none;
    &:focus {
      border: none;
    }
  }
`;

export const StyledPopup = styled(Popup)`
  &-content {
    background-color: transparent;
    width: auto;
    border: none;
  }
`;

export const IframeYoutube = styled.iframe`
  width: 789px;
  height: 409px;
  @media screen and (max-width: 992px) {
    width: 659px;
  }
  @media screen and (max-width: 768px) {
    width: 559px;
  }
  @media screen and (max-width: 576px) {
    width: 459px;
  }
`;
