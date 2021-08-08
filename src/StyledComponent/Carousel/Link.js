import styled from "styled-components";

export const LinkPlay = styled.a`
  font-size: 25px;
  margin-top: 200px;
  border: 3px solid white;
  color: ${(props) => props.theme.textColor};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 55px;
  display: block;
  text-align: center;
  margin: auto;
  transform: translateY(-250px);
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.theme.btnPrimaryColor};
    border: 3px solid ${(props) => props.theme.btnPrimaryColor};
  }
  @media screen and (max-width: 768px) {
    margin: 40%;
  }
`;

export const ButtonImg = styled.button`
  padding: 8px 19px;
  border-radius: 100px;
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  border: 1px solid transparent;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.btnPrimaryColor};
  transition: all 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.btnPrimaryColorHover};
  }
`;

export const LinkClick = styled.a`
  i {
    color: ${(props) => props.theme.btnPrimaryColor};
    font-size: 50px;
  }
  @media screen and (max-width: 1350px) {
    width: 5%;
  }

  @media screen and (max-width: 992px) {
    width: 5%;
  }
  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

export const LiCarosel = styled.li`
  background-color: ${(props) => props.theme.btnPrimaryColor} !important;
`;

export const DivFrameCarousel = styled.div`
  padding-top: 50px;
`;
