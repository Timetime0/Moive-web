import React, { Component } from "react";
import { connect } from "react-redux";
import { SIGN_UP_SAGA } from "../../Redux/Types/auth-type";
import {
  BookingContent,
  BookingImg,
  BookingForm,
  Form,
  FormInput,
  Img,
  MessageErrors,
} from "../../StyledComponent/Login/DangKyStyled";
import { withRouter } from "react-router";

class DangKy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        sdt: "",
        maNhom: "gp01",
        maLoai: "KhachHang",
        hoTen: "",
      },
      err: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        sdt: "",
        hoTen: "",
      },
    };
  }

  onChangeValue = (e) => {
    const { name, value } = e.target;

    if (value) {
      if (name === "taiKhoan" || name === "matKhau") {
        if (value.length < 6) {
          this.setState({
            err: { ...this.state.err, [name]: `${name} phải trên 6 ký tự` },
          });
        } else {
          this.setState({
            err: { ...this.state.err, [name]: "" },
          });
        }
      }

      if (name === "email") {
        const reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        if (!reg) {
          this.setState({
            err: { ...this.state.err, [name]: `${name} là abc@gmail.com` },
          });
        } else {
          this.setState({
            err: { ...this.state.err, [name]: "" },
          });
        }
      }

      if (name === "sdt") {
        const reg = /((0)+([0-9]{9})\b)/.test(value);
        if (!reg) {
          this.setState({
            err: { ...this.state.err, [name]: `${name} là 0x.xxxx.xxxx ` },
          });
        } else {
          this.setState({
            err: { ...this.state.err, [name]: "" },
          });
        }
      }
    }

    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: SIGN_UP_SAGA,
      user: this.state.user,
      history: this.props.history,
    });
  };

  render() {
    return (
      <BookingContent className="booking-content">
        <BookingImg className="booking-image">
          <Img
            className="booking-img"
            src="https://source.unsplash.com/collection/190727/300x500"
            alt="Booking Image"
          />
        </BookingImg>
        <BookingForm className="booking-form">
          <Form
            id="booking-formDk"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <h2 className="text-center">Đăng ký</h2>
            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="taiKhoan"
                required
                autoComplete="off"
              />
              <label htmlFor="taiKhoan" className="form-label">
                Tài khoản
              </label>
              <MessageErrors>{this.state.err.taiKhoan}</MessageErrors>
            </FormInput>
            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="matKhau"
                required
                autoComplete="off"
              />
              <label htmlFor="matKhau" className="form-label">
                Mật khẩu
              </label>
              <MessageErrors>{this.state.err.matKhau}</MessageErrors>
            </FormInput>

            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="email"
                required
                autoComplete="off"
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <MessageErrors>{this.state.err.email}</MessageErrors>
            </FormInput>

            <FormInput className="form-group form-input">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="sdt"
                required
                autoComplete="off"
              />
              <label htmlFor="sdt" className="form-label">
                Sđt
              </label>
              <MessageErrors>{this.state.err.sdt}</MessageErrors>
            </FormInput>

            <FormInput
              className="form-group form-input"
              style={{ display: "none" }}
            >
              <input
                onChange={this.onChangeValue}
                type="text"
                name="maNhom"
                value="gp01"
                required
                autoComplete="off"
              />
              <label htmlFor="maNhom" className="form-label">
                Mã nhóm
              </label>
            </FormInput>

            <FormInput
              className="form-group form-input displayNone"
              style={{ display: "none" }}
            >
              <input
                onChange={this.onChangeValue}
                type="text"
                name="maLoai"
                value="KhachHang"
                required
                autoComplete="off"
              />
              <label htmlFor="maLoai" className="form-label">
                Mã loai người dùng
              </label>
            </FormInput>

            <FormInput className="form-group form-input displayNone">
              <input
                onChange={this.onChangeValue}
                type="text"
                name="hoTen"
                required
                autoComplete="off"
              />
              <label htmlFor="hoTen" className="form-label">
                Họ tên
              </label>
              <MessageErrors>{this.state.err.hoTen}</MessageErrors>
            </FormInput>

            <div className="form-submit text-center">
              <input
                type="submit"
                value="Đăng ký"
                className="submit btn btn-success"
                name="submit"
              />
            </div>
          </Form>
        </BookingForm>
      </BookingContent>
    );
  }
}

export default connect(null)(withRouter(DangKy));
