import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgPrimaryColor};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin: auto;
  color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
  }
`;
export const ContainerFluid = styled.div`
  background-color: ${(props) => props.theme.bgPrimaryColor};
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.bgColor};
`;
