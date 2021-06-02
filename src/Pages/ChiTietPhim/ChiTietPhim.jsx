import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA_CHITIETPHIM_SAGA } from '../../Redux/Types/DataPhimType'
import CaroselChiTietPhim from './CaroselChiTietPhim'
import DanhGia from './DanhGia'
import LichChieuPhim from './LichChieuPhim'
import ThongTinPhim from './ThongTinPhim'
import {  DivBody } from '../../StyledComponent/ChiTietPhim/ChiTietPhim'
class ChiTietPhim extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const phim = this.props.chiTietPhim
        return (
            <div className="chiTietPhim">
                 
                    <CaroselChiTietPhim/>
                    <DivBody className="carousel-content pb-5">
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
                                <ThongTinPhim phim = {phim}/>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <LichChieuPhim maPhim={this.props.match.params.maPhim}/>             
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <DanhGia/>
                            </div>
                        </div>
                    </DivBody>
               
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



