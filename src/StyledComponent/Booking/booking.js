import styled from "styled-components";

export const BtnGhe = styled.button`
  color: ${(props) => props.theme.textColorSecond} !important;
  font-weight: 600;
  margin: 5px;
  border-radius: 5px;
  &.daDat {
    background-color: red;
    cursor: no-drop;
  }
  &.chuaDat {
    background-color: #7b7575;
  }
  &.dangChon {
    background-color: ${(props) => props.theme.btnPrimaryColor} !important;
  }
`;
export const BtnMau = styled(BtnGhe)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  &.daDat {
    background-color: red;
    color: red;
    cursor: pointer;
  }
`;

export const DivFrameDanhSachChonGhiChu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const DivFrameIcon = styled.div`
  margin: 0 10px;
`;

export const DivFrame = styled.div`
  span {
    color: ${(props) => props.theme.btnPrimaryColor};
    font-weight: bolder;
  }
`;

export const Td = styled.td`
  color: red;
  font-weight: bolder;
  padding: 0 !important;
  cursor: pointer;
  line-height: 45px;
  font-size: 25px;
`;

export const TableBooking = styled.div`
  height: 250px;
  overflow: auto;
`;

export const ImgScreen = styled.img`
  width: 100%;
`;
