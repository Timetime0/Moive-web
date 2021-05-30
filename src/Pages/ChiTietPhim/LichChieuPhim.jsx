import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA_LICHCHIEU_MAPHIM_SAGA, GET_INFOR_THEATER_SAGA } from '../../Redux/Types/dataRapPhim'
import { DivFrameLogoLCP, ImgLogoRap, DivFrameLogoRap, ImglogoLCP, PlogoLCP, Btn } from '../../StyledComponent/ChiTietPhim/LichChieuPhim'
import formatDate from 'date-format'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { withRouter } from "react-router";

class LichChieuPhim extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lichChieuPhim: '',
            logo: '',
            index: '',
            showTab1: false,
            showTab2: false,
            idForActiveLogo: '',
            idForActiveLogo2: '',

        }
    }

    renderLogoRapChieuPhim = () => {
        return this.props.arrData.map((rap, index) => {
            return (
                <div key={index} className="col-4 col-md-2 py-3">
                    <div>
                        <DivFrameLogoRap>
                            <ImgLogoRap className={this.state.idForActiveLogo===index?`active`:''} onClick={() => this.handleOnClick(rap.maHeThongRap,index)} name={rap.maHeThongRap} src={rap.logo} />
                        </DivFrameLogoRap>
                    </div>
                </div>
            )
        })
    }

    handleOnClick = (maHeThongRap,index) => {
        const maPhim = this.props.maPhim
        this.setState({
            showTab1: false,
            idForActiveLogo: index,
            index:'',
        })
        this.props.dispatch({
            type: GET_DATA_LICHCHIEU_MAPHIM_SAGA,
            maPhim: maPhim,
            maHeThongRap: maHeThongRap,
        })
    }

    renderFrameLichChieu = () => {
        if(this.state.lichChieuPhim.heThongRapChieu.length !==0){
            return (
                <div className="py-4">
                    <Btn className="btn btn-outline-success"><h1>Chọn Cụm Rạp</h1></Btn>
                    <div className="row mt-2">
                    <div className="col-12">
                        <div className="row justify-content-start">
                            {this.renderlogo()}
                        </div>
                    </div>
                    <div className="col-12">
                        {this.state.showTab1 ? <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã Rạp</th>
                                        <th scope="col">Tên Rạp</th>
                                        <th scope="col">Giá vé</th>
                                        <th scope="col">Thời lượng</th>
                                        <th scope="col">Ngày chiếu</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderLichChieu()}
                                </tbody>
                            </table> : ''}
                        </div>
                    </div>
                </div>
            )
        }else{
            return <div className="pt-5 text-center"><h2>Không có lịch chiếu phim !!!</h2></div>
        }
 
    }

    renderlogo = () => {
        const cumRapChieuPhim = this.state.lichChieuPhim.heThongRapChieu
        const logo = this.state.logo[0]?.logo
        return cumRapChieuPhim?.map((item, index) => {
            return item.cumRapChieu?.map((cumRapChieu, index) => {
                return <div className="col-2 text-center" key={index}>
                    <ImglogoLCP className={this.state.index===index?`active`:''} onClick={() => this.handleOnClickLichChieu(index)} src={logo} alt="true" />
                    <PlogoLCP>{cumRapChieu.tenCumRap}</PlogoLCP>
                </div>
            })
        })
    }

    handleOnClickLichChieu = (index) => {
        this.setState({
            index: index,
            showTab1: true,
        })
    }




    renderLichChieu = () => {
       
        const lichChieu = this.state.lichChieuPhim.heThongRapChieu[0].cumRapChieu[`${this.state.index}`]?.lichChieuPhim
        return lichChieu?.map((rap, index) => {
            return (
                <tr key={index}>
                    <td>{rap.maRap}</td>
                    <td>{rap.tenRap}</td>
                    <td>{rap.giaVe}</td>
                    <td>{rap.thoiLuong}</td>
                    <td> {formatDate("dd-MM hh:mm", new Date(rap.ngayChieuGioChieu))}</td>
                    <td> <Btn className="btn btn-outline-success" onClick={()=>this.handleOnClickBooking(rap.maLichChieu)}>Đặt vé</Btn></td>
                </tr>
            )
        })
    }

    handleOnClickBooking = (maLichChieu)=> {
        const client =(localStorage.getItem('client'))
        console.log(client)
        if(!client){
            Swal.fire({
                title: 'BẠN CHƯA ĐĂNG NHẬP',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: `#f36522 `,
                confirmButtonText: 'ĐĂNG NHẬP',
                cancelButtonColor: '#d33',
                cancelButtonText: `THOÁT`
              }).then((result) => {
                if (result.isConfirmed) {
                    return this.props.history.push(`/login`)
                }
              })
        }else{
            return this.props.history.push(`/booking/${maLichChieu}`)
        }
    }


    render() {
        const lichChieuPhim = this.state.lichChieuPhim.heThongRapChieu
        return (
            <div className="rapPhim">
                <div className="container-md container-fluid">
                    <Btn className="btn btn-outline-success"><h1>Chọn Rạp</h1></Btn>
                    <DivFrameLogoLCP className="logo mt-2">
                        <div className="row">
                            {this.renderLogoRapChieuPhim()}
                        </div>
                    </DivFrameLogoLCP>
                </div>
                <div className="container">
                    {lichChieuPhim ? this.renderFrameLichChieu() : ''}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch({ type: GET_INFOR_THEATER_SAGA })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.lichChieuPhim !== this.props.lichChieuMaPhim) {
            this.setState({
                lichChieuPhim: this.props.lichChieuMaPhim,
                logo: this.props.lichChieuMaPhim.heThongRapChieu
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        arrData: state.arrDataRapPhimReducer.arrData,
        lichChieuMaPhim: state.arrDataRapPhimReducer.lichChieuMaPhim,
    }
}

export default connect(mapStateToProps)(withRouter(LichChieuPhim))
