import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA_PHIM_SAGA } from '../../Redux/Types/DataPhimType'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { DivListPhimItem, DivDanhGia, DivDatVe, ImgListPhim, DivListPhimFrame, ButtonListPhim, DivContent, DivColorStar, SliderCostum, DivArrow } from '../../StyledComponent/DanhSachPhim/CarouselDanhSachPhim'
import { DivChiTietFrame, DivImgChiTiet, ImgChiTiet, DivPhimContent, DivHoverPopup, DivPlay, DivCount, DivLinkYoutube, StyledPopup, IframeYoutube } from '../../StyledComponent/DanhSachPhim/ChiTietPhim'
import { changeChitietPhim } from '../../Redux/Actions/objectPhimAction'
import '../../../node_modules/reactjs-popup/dist/index.css'
import { withRouter } from "react-router";
class DanhSachPhim extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phim: [],
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    handleOnClickItem = (phim) => {
        this.props.dispatch(changeChitietPhim(phim))
    }

    handleOnClickDatVe = () => {
        console.log("Đặt vé")
    }

    handleDanhSachPhim = () => {
        return this.props.arrData.map((phim, index) => {
            return (
                <DivListPhimFrame key={index} className="listPhim__item">
                    <DivListPhimItem lassName="listPhim-for-hover" onClick={() => { this.handleOnClickItem(phim) }}>
                        <div className="listPhim__img">
                            <ImgListPhim className="imgListPhim" src={phim.hinhAnh} />
                        </div>
                        <DivContent className="listPhim__content">
                            <h4>{phim.tenPhim}</h4>
                            <p>{(() => this.handleDay(phim.ngayKhoiChieu))()}</p>
                        </DivContent>
                        <DivDanhGia>
                            <span>{phim.danhGia}/10</span> <br></br>
                            {this.handleStar(phim.danhGia)}
                        </DivDanhGia>
                        <DivDatVe className="divDatVe"><ButtonListPhim className="btn" onClick={() => { this.handleOnClickDatVe() }}>MUA VÉ</ButtonListPhim>
                        </DivDatVe>
                    </DivListPhimItem>
                </DivListPhimFrame>
            )
        })
    }

    handleOnClickPhimChiTiet = (maPhim)=>{
        return this.props.history.push(`/chitietphim/${maPhim}`)
    }

    handleChiTietPhim = () => {
        const phim = this.props.objectPhim
        return (
            <DivChiTietFrame >
                <DivImgChiTiet onClick={()=>this.handleOnClickPhimChiTiet(phim.maPhim)}>
                    <ImgChiTiet src={phim.hinhAnh} alt="true" />
                    <DivPhimContent className="phim__content">
                        <h3>{phim.tenPhim}</h3>
                        <p>Ngày phát hành:
                                {this.handleDay(phim.ngayKhoiChieu)}
                        </p>
                    </DivPhimContent>
                    
                    <StyledPopup trigger={<DivPlay className="m-5 divPlay">
                        <div className="carousel__play"><i className="fa fa-play"></i></div>
                    </DivPlay>} modal nested>
                        {close => (
                            <DivLinkYoutube className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div>
                                    <IframeYoutube src={phim.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IframeYoutube>
                                </div>
                            </DivLinkYoutube>
                        )}
                    </StyledPopup>

                    <DivDanhGia inputWidth="70px">
                        <span>{phim.danhGia}/10</span> <br></br>
                        {this.handleStar(phim.danhGia)}
                    </DivDanhGia>
                    <DivHoverPopup className="divHoverPopup">
                        <div className="speech-bubble">
                            <h2>Tên phim: {phim.tenPhim}</h2>
                            <p> <span style={{ fontWeight: 'bolder' }}> Ngày phát hành</span>: {this.handleDay(phim.ngayKhoiChieu)}
                            </p>
                            <span><span style={{ fontWeight: 'bolder' }}>Đánh giá</span>: {this.handleStar(phim.danhGia, "black", "#ffffff57")}</span>
                            <p><span style={{ fontWeight: 'bolder' }}>Mô tả:</span> {phim.moTa}</p>
                        </div>
                    </DivHoverPopup>
                </DivImgChiTiet>
            </DivChiTietFrame>
        )

    }

    handleStar = (item, color, colorFa) => {
        switch (Math.floor(item / 2)) {
            case 0: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 1: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 2: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 3: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 4: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 5: return <DivColorStar inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i></DivColorStar>
            default: return ''
        }
    }


    handleDay = (string) => {
        return string ? string.slice(0, 10) : ''
    }

    render() {
        const settings = {
            infinite: true,
            dots: true,
            speed: 800,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 2
                    }
                },

            ],
            appendDots: dots => (
                <div style={{ backgroundColor: "#040714", borderRadius: "10px", padding: "10px" }}>
                    <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => {
                return (
                    <DivCount >
                        <div style={{ width: "30px", color: "#f36522", border: "1px solid #f36522" }}> {i + 1}</div>
                    </DivCount>
                )
            }
        };

        return (
            <div className="container-md container-fluid" id="lichChieuPhim">
                <div className="listPhim row" style={{ position: 'relative' }}>
                    <div className="col-6 phim">
                        {this.handleChiTietPhim()}
                    </div>
                    <SliderCostum ref={c => (this.slider = c)} {...settings} className="col-6">
                        {this.handleDanhSachPhim()}
                    </SliderCostum>
                    <DivArrow style={{ textAlign: "center" }}>
                        <span className="previous" onClick={this.previous}>
                            <i className="fa fa-angle-left"></i>
                        </span>
                        <span className="next" onClick={this.next}>
                            <i className="fa fa-angle-right"></i>
                        </span>
                    </DivArrow>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch({ type: GET_DATA_PHIM_SAGA })
    }

}


const mapStateToProps = (state) => {
    return {
        arrData: state.arrDataPhimReducer.arrData,
        objectPhim: state.arrDataPhimReducer.objectPhim
    }
}


export default connect(mapStateToProps)(withRouter(DanhSachPhim))
