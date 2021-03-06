import { connect } from "react-redux";
import React, { Component } from "react";
import {
  BtnDg,
  DivFrameComment,
  DivRow,
  ImgAvt,
  Text,
} from "../../StyledComponent/ChiTietPhim/danhGia";
import { withRouter } from "react-router";
import { ADD_COMMENTS } from "../../Redux/Types/DanhGiaType";
import Swal from "sweetalert2";
import Format from "date-format";

class DanhGia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      comments: {
        taiKhoan: "",
        noiDung: "",
        ngayThang: "",
      },
    };
  }

  renderComment = () => {
    const { danhGia } = this.props;
    const maPhim = this.props.match.params.maPhim;
    if (danhGia) {
      const danhGiaByPhim = danhGia.filter((item) => item.maPhim === +maPhim);
      if (danhGiaByPhim.length !== 0) {
        return danhGiaByPhim[0].comments?.map((item, index) => {
          return (
            <DivRow className="row pt-3" key={index}>
              <div className="col-2 text-center">
                <ImgAvt
                  src={`https://i.pravatar.cc/150?u=fake@${item.taiKhoan}`}
                  alt="true"
                />
              </div>
              <div className="col-10">
                <div className="row">
                  <p className="col-6">{item.taiKhoan}</p>
                  <p className="col-6 text-right">
                    {Format("hh:mm - dd/MM/yyyy", new Date(item.ngayThang))}
                  </p>
                  <DivFrameComment className="col-12">
                    {item.noiDung}
                  </DivFrameComment>
                </div>
              </div>
            </DivRow>
          );
        });
      }
    } else {
      return <div></div>;
    }
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      comments: { ...this.state.comments, [name]: value },
    });
  };

  handleOnSubmit = () => {
    const user = localStorage.getItem("client");
    if (user) {
      const { noiDung } = this.state.comments;
      if (noiDung) {
        const client = JSON.parse(localStorage.getItem("client"));
        this.props.dispatch({
          type: ADD_COMMENTS,
          maPhim: this.props.match.params.maPhim,
          object: {
            taiKhoan: client.taiKhoan,
            noiDung: this.state.comments.noiDung,
            ngayThang: new Date(),
          },
        });
        this.forceUpdate();
      }
    } else {
      Swal.fire({
        title: "B???n ch??a ????ng nh???p",
        text: "??i ?????n trang ????ng nh???p",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f36522 ",
        cancelButtonColor: "#d33",
        confirmButtonText: "?????ng ??",
        cancelButtonText: "Kh??ng",
      }).then((result) => {
        if (result.isConfirmed) {
          this.props.history.push("/login");
        }
      });
    }

    this.setState({
      comments: {
        ...this.state.comments,
        noiDung: "",
      },
    });
    this.updateNumber();
    this.forceUpdate();
  };

  render() {
    return (
      <div className="container">
        <div className="comments">
          <p>({this.state.number}) B??nh lu???n</p>
          <DivRow className="row">
            <div className="col-2 text-center">
              <ImgAvt src="https://i.pravatar.cc/150?u=fake@Admin" alt="true" />
            </div>
            <div className="col-10">
              <div className="row">
                <p className="col-6">Admin</p>
                <p className="col-6 text-right">02:08 - 02/06/2021</p>
                <DivFrameComment className="col-12">
                  I love you ph???c ph???c
                </DivFrameComment>
              </div>
            </div>
          </DivRow>
          {this.renderComment()}
        </div>

        <div className="commentsOfyour text-center pt-5">
          <div className="form-group">
            <Text
              className="form-input"
              name="noiDung"
              required=""
              value={this.state.comments.noiDung}
              placeholder="Your text"
              onChange={this.handleOnChange}
            ></Text>
          </div>
          <BtnDg onClick={this.handleOnSubmit} className="btn btn-success">
            G???i
          </BtnDg>
        </div>
      </div>
    );
  }

  updateNumber = () => {
    const { danhGia } = this.props;
    const maPhim = this.props.match.params.maPhim;
    if (danhGia) {
      const danhGiaByPhim = danhGia.filter((item) => item.maPhim === +maPhim);
      if (danhGiaByPhim.length !== 0) {
        this.setState({
          number: 1 + danhGiaByPhim[0].comments.length,
        });
      }
    }
  };

  componentDidMount() {
    this.updateNumber();
  }
}

const mapStateToProps = (state) => {
  return {
    danhGia: state.arrDanhGia.danhGia,
  };
};

export default connect(mapStateToProps)(withRouter(DanhGia));
