import styled from "styled-components";

export const ImgDienAnh = styled.img`
  width: 100%;
  display: block;
`;

export const ImgDienAnhSmall = styled.img`
  width: 30%;
  display: inline-block;
`;

export const PDienAnh = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;

export const DivDienAnh = styled.div`
  margin: 5px 0;
`;

export const H6DienAnh = styled.h6`
  display: inline;
  font-size: 14px;
`;

export const DivChild1 = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const DivChild2 = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const DivFrameDienAnh = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DivFrameDienAnh1 = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LinkDienAnh = styled.div`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.btnPrimaryColor};
  }
`;

export const ButtonDienAnh = styled.button`
    font-weight:bolder;
    color:${(props) => props.theme.textColor};
    background-color:${(props) => props.theme.btnPrimaryColor};
    border:1px solid: ${(props) => props.theme.btnPrimaryColor};
    &:hover{
        color:${(props) => props.theme.btnPrimaryColor};
        background-color:${(props) => props.theme.btnPrimaryColorHover};
    }
`;
