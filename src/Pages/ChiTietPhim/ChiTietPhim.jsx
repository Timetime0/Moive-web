import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA_CHITIETPHIM_SAGA } from '../../Redux/Types/DataPhimType'
import { ImgChiTiet, DivBgChiTiet, DivHeader, SpanImgInner, DivPlay, CircleIn, CirclePut, Rate, CircleBar, CircleFill, Slice, Star, DivBody, H1Phim, SpanContent } from '../../StyledComponent/ChiTietPhim/ChiTietPhim'
import { DivColorStar } from '../../StyledComponent/DanhSachPhim/CarouselDanhSachPhim'
import { DivLinkYoutube, IframeYoutube, StyledPopup } from '../../StyledComponent/DanhSachPhim/ChiTietPhim'

class ChiTietPhim extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleDay = (string) => {
        return string ? string.slice(0, 10) : ''
    }

    handleCircle = (danhGia) => {
        console.log(danhGia)

        const x = danhGia * 360 / 10 - 180
        if (x === 180) {
            return 0 + 'deg'
        } else {
            return -x + 'deg'
        }
    }

    handleStar = (item, color, colorFa) => {
        switch (Math.floor(item / 2)) {
            case 0: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i> <i style={{ fontSize: 8 }} className="fa fa-splotch "></i></DivColorStar>

            case 1: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> </DivColorStar>

            case 2: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> </DivColorStar>

            case 3: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> </DivColorStar>

            case 4: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> </DivColorStar>

            case 5: return <DivColorStar className="divColorStar" inputColor={color} inputColorFa={colorFa}> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i> <i style={{ fontSize: 8 }} className="fa fa-splotch color"></i></DivColorStar>
            default: return ''
        }
    }

    render() {
        const phim = this.props.chiTietPhim
        return (
            <div className="chiTietPhim">
                <div className="chiTietPhim__carousel" style={{position:'relative'}}>
                    <div style={{ position: 'absolute', width: '100%' }}>
                        <DivBgChiTiet className="divBgChiTiet" imgUrl={phim.hinhAnh}></DivBgChiTiet>
                    </div>
                    <DivHeader className="carousel-header container">
                        <div className="row" style={{marginRight: '0px'}}>
                            <div className="col-md-8">
                                <div className="row">
                                    <SpanImgInner className="col-sm-6 col-12">
                                        <ImgChiTiet src={phim.hinhAnh} alt="" />

                                        <StyledPopup trigger={
                                        <DivPlay className="divPlay"><i class="fa fa-play-circle"></i></DivPlay>} modal nested>
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


                                    </SpanImgInner>
                                    <SpanContent className="col-sm-6 col-12 d-flex align-self-center">
                                        <div>
                                            <h4>
                                                {this.handleDay(phim.ngayKhoiChieu)}
                                            </h4>
                                            <H1Phim>{phim.tenPhim}</H1Phim>
                                            <h6>Loại phim</h6>
                                        </div>
                                    </SpanContent>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex  align-self-center justify-content-center pt-md-0 pt-5">
                                <div className="">
                                    <CircleIn className="circle-outside ml-2">
                                        <Slice>
                                            <CircleBar Deg={this.handleCircle(phim.danhGia)}></CircleBar>
                                            <CircleFill></CircleFill>
                                        </Slice>


                                        <CirclePut className="circle-inside">
                                            <Rate>{phim.danhGia}</Rate>
                                        </CirclePut>
                                    </CircleIn>

                                    <Star className="mt-2"> {this.handleStar(phim.danhGia)}</Star>
                                    <div style={{ fontWeight: 'bolder' }}>??? người đánh giá</div>
                                </div>
                            </div>
                        </div>
                    </DivHeader>

                    <DivBody className="carousel-content py-5">
                        <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Thông tin</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Lịch chiếu</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Đánh giá</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    Ngày công chiếu
                                                </div>
                                                <div className="col-md-6">
                                                    {this.handleDay(phim.ngayKhoiChieu)}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    Đạo diễn
                                                </div>
                                                <div className="col-md-6">

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    Diễn viên
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    Thể loại
                                                </div>
                                                <div className="col-md-6">

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    Định dạng
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    Quốc gia
                                                </div>
                                                <div className="col-md-6">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pt-md-0 pt-5">
                                            <div>
                                                Nội dung
                                            </div>
                                            <div>
                                                {phim.moTa}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                            </div>
                        </div>
                    </DivBody>
                </div>
            </div>
        )
    }


    componentDidMount() {
        this.props.dispatch({
            type: GET_DATA_CHITIETPHIM_SAGA,
            maPhim: this.props.match.params.maPhim
        })
    }
}


const mapStateToProps = (state) => {
    return {
        chiTietPhim: state.arrDataChiTetPhimReducer.chiTietPhim
    }
}


export default connect(mapStateToProps)(ChiTietPhim)



