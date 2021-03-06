import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_NGUOIDUNG_SAGA,
  UPDATE_NGUOIDUNG_SAGA,
} from "../../../Redux/Types/Admin/quanLyNguoiDungType";
import { ButtonThem } from "../../../StyledComponent/Admin/QuanLyNguoiDung/quanLyNguoiDung";
import {
  BookingContent,
  FormInput,
  Img,
  Form,
  Select,
  BookingFormAd,
  BookingImgAdmin,
} from "../../../StyledComponent/Login/DangKyStyled";

class FormAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "gp01",
        maLoaiNguoiDung: "",
        hoTen: "",
      },
    };
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "taiKhoan") {
    }
    this.setState((user) => ({
      user: {
        ...this.state.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const status = this.props.status;
    this.props.hiddenModel();
    if (status === "fix") {
      this.props.dispatch({
        type: UPDATE_NGUOIDUNG_SAGA,
        nguoiDung: this.state.user,
        soTrang: this.props.selected,
        soPhanTuTrang: 20,
      });
    } else {
      this.props.dispatch({
        type: ADD_NGUOIDUNG_SAGA,
        nguoiDung: this.state.user,
        soTrang: this.props.selected,
        soPhanTuTrang: 20,
      });
    }
  };

  render() {
    const status = this.props.status;

    return (
      <BookingContent className="booking-content">
        <BookingImgAdmin className="booking-image">
          <Img
            className="booking-img"
            src="https://source.unsplash.com/collection/190727/700x550"
            alt="Booking Image"
          />
        </BookingImgAdmin>
        <BookingFormAd className="booking-form ">
          <Form
            id="booking-form"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <h3 className="text-center">
              {status === "fix" ? "C???p nh???t user" : "Th??m user"}
            </h3>
            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                value={this.state.user.taiKhoan}
                required
                autoComplete="off"
              />
              <label htmlFor="taiKhoan" className="form-label">
                T??i kho???n
              </label>
            </FormInput>
            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="matKhau"
                id="matKhau"
                value={this.state.user.matKhau}
                required
                autoComplete="off"
              />
              <label htmlFor="matKhau" className="form-label">
                M???t kh???u
              </label>
            </FormInput>

            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="email"
                id="email"
                value={this.state.user.email}
                required
                autoComplete="off"
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </FormInput>

            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="soDt"
                id="soDt"
                value={this.state.user.soDt}
                required
                autoComplete="off"
              />
              <label htmlFor="sdt" className="form-label">
                S??t
              </label>
            </FormInput>

            <FormInput
              className="form-group form-input displayNone"
              style={{ display: "none" }}
            >
              <input
                onChange={this.onChangeValue}
                type="text"
                name="maNhom"
                id="maNhom"
                value="gp01"
                required
                autoComplete="off"
              />
              <label htmlFor="maNhom" className="form-label">
                M?? nh??m
              </label>
            </FormInput>

            <FormInput className="form-group">
              <Select
                onChange={this.onChangeValue}
                className="form-control"
                id="maLoaiNguoiDung"
                value={this.state.user.maLoaiNguoiDung}
                name="maLoaiNguoiDung"
              >
                <option className="unit">M?? lo???i ng?????i d??ng</option>
                <option value="QuanTri" className="selected">
                  Qu???n tr???
                </option>
                <option value="KhachHang" className="selected">
                  Kh??ch h??ng
                </option>
              </Select>
            </FormInput>

            <FormInput className="form-group form-input displayNone">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="hoTen"
                id="hoTen"
                value={this.state.user.hoTen}
                required
                autoComplete="off"
              />
              <label htmlFor="hoTen" className="form-label">
                H??? t??n
              </label>
            </FormInput>

            <div
              className="form-submit text-right"
              style={{ marginTop: "35px" }}
            >
              <ButtonThem
                type="submit"
                className="submit btn btn-success"
                id="submit"
                name="submit"
              >
                {status === "fix" ? "C???p nh???t" : "Th??m"}
              </ButtonThem>
            </div>
          </Form>
        </BookingFormAd>
      </BookingContent>
    );
  }
  componentDidUpdate(prevProps) {
    const status = this.props.status;
    const users = this.props.user;
    if (users !== prevProps.user) {
      if (status === "fix") {
        const newUser = { ...users, maNhom: "GP01" };
        this.setState({
          user: newUser,
        });
      } else {
        let newUser = {
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP01",
          maLoaiNguoiDung: "",
          hoTen: "",
        };
        this.setState({
          user: newUser,
        });
      }
    }
  }
}

export default connect(null)(FormAd);
