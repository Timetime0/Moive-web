import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ImgChiTiet,
  DivBgChiTiet,
  DivHeader,
  SpanImgInner,
  DivPlay,
  CircleIn,
  CirclePut,
  Rate,
  CircleBar,
  CircleFill,
  Slice,
  Star,
  H1Phim,
  SpanContent,
  DivFrameCarousel,
  DivFrameInnerCarousel,
} from "../../StyledComponent/ChiTietPhim/ChiTietPhim";
import {
  DivLinkYoutube,
  IframeYoutube,
  StyledPopup,
} from "../../StyledComponent/DanhSachPhim/ChiTietPhim";
import { DivColorStar } from "../../StyledComponent/DanhSachPhim/CarouselDanhSachPhim";
import { GET_DATA_CHITIETPHIM_SAGA } from "../../Redux/Types/DataPhimType";
import { withRouter } from "react-router";

class CaroselChiTietPhim extends Component {
  handleDay = (string) => {
    return string ? string.slice(0, 10) : "";
  };

  handleCircle = (danhGia) => {
    const x = (danhGia * 360) / 10 - 180;
    if (x === 180) {
      return 0 + "deg";
    } else {
      return x - 180 + "deg";
    }
  };

  handleStar = (item, color, colorFa) => {
    switch (Math.floor(item / 2)) {
      case 0:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch "></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch "></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch "></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch "></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch "></i>
          </DivColorStar>
        );

      case 1:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
          </DivColorStar>
        );

      case 2:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
          </DivColorStar>
        );

      case 3:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
          </DivColorStar>
        );

      case 4:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
          </DivColorStar>
        );

      case 5:
        return (
          <DivColorStar
            className="divColorStar"
            inputColor={color}
            inputColorFa={colorFa}
          >
            {" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>{" "}
            <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i>
          </DivColorStar>
        );
      default:
        return "";
    }
  };
  render() {
    const phim = this.props.chiTietPhim;
    return (
      <DivFrameCarousel
        className="chiTietPhim__carousel"
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", width: "100%" }}>
          <DivBgChiTiet
            className="divBgChiTiet"
            imgUrl={phim.hinhAnh}
          ></DivBgChiTiet>
        </div>
        <DivFrameInnerCarousel>
          <DivHeader className="carousel-header container">
            <div className="row" style={{ marginRight: "0px" }}>
              <div className="col-md-8">
                <div className="row">
                  <SpanImgInner className="col-sm-6 col-12">
                    <ImgChiTiet src={phim.hinhAnh} alt="" />

                    <StyledPopup
                      trigger={
                        <DivPlay className="divPlay">
                          <i className="fa fa-play-circle"></i>
                        </DivPlay>
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <DivLinkYoutube className="modal">
                          <button className="close" onClick={close}>
                            &times;
                          </button>
                          <div>
                            <IframeYoutube
                              src={phim.trailer}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></IframeYoutube>
                          </div>
                        </DivLinkYoutube>
                      )}
                    </StyledPopup>
                  </SpanImgInner>

                  <SpanContent className="col-sm-6 col-12 d-flex align-self-center">
                    <div>
                      <h4>{this.handleDay(phim.ngayKhoiChieu)}</h4>
                      <H1Phim>{phim.tenPhim}</H1Phim>
                      <h6>Loại phim</h6>
                    </div>
                  </SpanContent>
                </div>
              </div>
              <div className="col-md-4 d-flex  align-self-center justify-content-center pt-md-0 pt-3">
                <div className="">
                  <CircleIn className="circle-outside ml-2">
                    <Slice>
                      <CircleBar
                        Deg={this.handleCircle(phim.danhGia)}
                      ></CircleBar>
                      <CircleFill></CircleFill>
                    </Slice>
                    <CirclePut className="circle-inside">
                      <Rate>{phim.danhGia}</Rate>
                    </CirclePut>
                  </CircleIn>

                  <Star className="mt-2"> {this.handleStar(phim.danhGia)}</Star>
                  <div style={{ fontWeight: "bolder" }}>??? người đánh giá</div>
                </div>
              </div>
            </div>
          </DivHeader>
        </DivFrameInnerCarousel>
      </DivFrameCarousel>
    );
  }
  componentDidMount() {
    localStorage.getItem("maPhim");
    this.props.dispatch({
      type: GET_DATA_CHITIETPHIM_SAGA,
      maPhim: localStorage.getItem("maPhim"),
    });
  }
}

const mapStateToProps = (state) => {
  return {
    chiTietPhim: state.arrDataChiTetPhimReducer.chiTietPhim,
  };
};

export default connect(mapStateToProps)(withRouter(CaroselChiTietPhim));
