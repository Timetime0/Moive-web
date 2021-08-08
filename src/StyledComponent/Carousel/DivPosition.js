import styled from "styled-components";

export const DivPosition = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
  padding: 0 20px;
  @media screen and (max-width: 992px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 576px) {
    padding-left: 0px;
  }
`;

export const DivPositionHeader = styled.div`
  position: absolute;
  overflow: hidden;
  top: 100px;
  left: 0px;
  right: 10px;
  height: 80%;
  max-width: 80%;
  padding: 0 0px;
  @media screen and (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    top: 50px;
    height: 75%;
    margin-left: 50px;
    margin-right: 200px;
    max-width: 71.5%;
  }
  @media screen and (max-width: 576px) {
    max-width: 79.5%;
  }
`;

export const DivBgBehind = styled.div`
  width: 100%;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(242, 101, 34, 0.51) -18%,
      rgba(10, 21, 33, 0.9) 75%
    );
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const DivImgFrame = styled.div`
  height: 80%;
  margin: 25px 0;
  z-index: 1;
  @media screen and (max-width: 992px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    margin: 0;
  }
`;

export const SpanLeft = styled.span`
  display: block;
  background-color: ${(props) => props.bgColor || "#060f19"};
  color: #fff;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 6px 10px;
  width: 75%;
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.btnPrimaryColor};
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 992px) {
    width: 86%;
  }
`;

export const SpanLeftAnim = styled(SpanLeft)``;

export const SpanRight = styled.span`
  display: block;
  color: #fff;
  padding: 6px 10px;
  margin-right: 25px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${(props) => props.bgColor || "#060f19"};
  transition: all 0.3s;
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.bgColor || "#f36522"};
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 992px) {
    padding: 6px 6px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const I = styled.i`
  color: #f36522;
  padding: 0 3px;
`;

export const DivRowHeader = styled.div`
  margin-right: -20px;
  margin-left: -5px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (max-width: 576px) {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
export const DivRowFooter = styled.div`
  position: absolute;
  padding-top: 0px;
  bottom: 50px;
  left: -5px;
  right: -25px;
  @media screen and (max-width: 768px) {
    left: 0px;
    right: 0px;
  }
`;

export const DivDetail = styled.div`
  overflow: hidden;
  padding-left: 20px;
  padding-top: 0px;
  height: 30px;
  width: 100%;
  transition: all 0.5s;
  transform: translateY(30px);
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const DivFrame = styled.div`
  cursor: grab;
`;

export const DivLeftAim = styled.div`
  transform: translateX(-180px);
  transition: all 0.5s;
`;

export const DivRightAim = styled.div`
  transition: all 0.5s;
  transform: translateX(180px);
`;
export const DivCarouselCaption = styled.div`
  position: relative;
  left: 0%;
  right: 0%;
  &:hover {
    .carousel__detail {
      transform: translateY(0);
      height: 150px;
    }
    .divLeftAim {
      transform: translateX(0);
    }
    .carousel__play {
      transform: translateY(0);
    }
    .divRightAim {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 25px;
    height: 100vh;
  }
`;

export const Content = styled.p`
  overflow: hidden;
  margin-bottom: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DivModal = styled.div`
  max-width: 100%;
  width: 0;
  position: relative;
`;
export const Iframe = styled.iframe`
  position: absolute;
  top: 300px;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 992px) {
    width: 689px;
    height: 430px;
  }
  @media screen and (max-width: 768px) {
    width: 589px;
    height: 430px;
  }
  @media screen and (max-width: 576px) {
    width: 489px;
    height: 330px;
    left: 240px;
    margin-left: 5px;
  }
`;

export const ButtonIframe = styled.button`
  position: absolute;
  right: -450px;
  color: #f36522;
  font-size: 50px;
  z-index: 3;
`;

export const DivRight = styled.div`
  margin-bottom: 50px @media screen and (max-width: 992px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
