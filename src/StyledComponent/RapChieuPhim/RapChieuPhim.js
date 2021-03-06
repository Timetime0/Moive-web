import styled from "styled-components";

export const ImgLogoRap = styled.img`
  width: 50%;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid transparent;
  &:hover {
    // background-color:red;
    box-shadow: 3px 5px 5px ${(props) => props.theme.btnPrimaryColor};
    .divHoverLogo {
      transform: translateY(0px);
      visibility: visible;
    }
  }
`;

export const DivNameRap = styled.div`
  text-align: center;
  color: ${(props) => props.theme.btnPrimaryColor};
  font-weight: bolder;
  font-size: 18px;
`;
export const DivHoverLogo = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.btnPrimaryColor};
  border-radius: 15px;
  position: absolute;
  top: 230px;
  visibility: hidden;
  left: 5%;
  right: 5%;
  transition: all 0.5s;
  opacity: 0;
  @media screen and (max-width: 992px) {
    top: 205px;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    position: relative;
    visibility: visible;
    opacity: 1;
    top: 0px;
  }
`;

export const Logo = styled.div`
  &:hover {
    .divHoverLogo {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const DivTenCumRap = styled.div``;

export const ImgCarousel = styled.img`
  width: 100%;
`;

export const DivFrameCarousel = styled.div`
  overflow: hidden;
  width: 100%;
  height: 400px;
  background-position: cover;
  background-size: cover;
  @media screen and (max-width: 576px) {
    height: 300px;
  }
`;
export const LinkRap = styled.a`
  cursur: pointer;
  color: ${(props) => props.theme.textColorSecond};
  font-weight: bolder;
`;

export const DivFrameLogoRap = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const DivRapChieuPhim = styled.div`
  padding-top: 90px;
`;
