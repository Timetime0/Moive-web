import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BOOKING_CHAIR_SAGA, CHOICE_GHE, DELETE_GHE, GET_PHONGVE_SAGA } from '../../Redux/Types/Admin/quanLyDatVe'
import CaroselChiTietPhim from './CaroselChiTietPhim'
import { BtnGhe, BtnMau, DivFrameDanhSachChonGhiChu, DivFrameIcon, DivFrame, Td, TableBooking, ImgScreen } from '../../StyledComponent/Booking/booking'
import Swal from 'sweetalert2'
import screen from '../../Assets/img/Booking/screen.png'
import CountdownClock from './CountdownClock'

class Booking extends Component {

    constructor(props) {
        super(props)
        this.state = {
            choiceGhe: false,
            className:''
        }
    }

    renderGhe = () => {
        const danhSachGhe = this.props.danhSachGhe
        if(danhSachGhe){
            return danhSachGhe.map((ghe, index) => {
                return <BtnGhe key={index} onClick={() => this.handleOnClick(ghe)} 
                className={this.handleColor(ghe)}>{ghe.tenGhe}</BtnGhe>
            })
        }
    }

    handleColor = (ghe)=> {
        let name=''
        if(ghe.daDat === true){
            name = 'daDat'
            return name
        }else{
            name = 'chuaDat'
            if(ghe.dangChon){
                name+= ' dangChon'
            }
            return name
        }
    }


    handleOnClick = (ghe) => {
        if (!ghe.daDat) {
            this.props.dispatch({
                type: CHOICE_GHE,
                maGhe: ghe.maGhe,
            })
        }
        this.showTable()
    }

    renderChiTietDat = () => {
        const chiTiet = this.props.thongTinPhim
        if (chiTiet) {
            return (
                <DivFrame className="col-12 text-center">
                    <img src={chiTiet.hinhAnh} alt="" style={{width:'100%'}}/>
                    <p>Rạp: {chiTiet.tenCumRap} </p>
                    <p>{chiTiet.diaChi}</p>
                    <p>{chiTiet.tenRap} lúc <span>{chiTiet.gioChieu}</span> ngày <span>{chiTiet.ngayChieu}</span></p>
                    <h2>Danh Sách Ghế Bạn Chọn</h2>
                    <DivFrameDanhSachChonGhiChu>
                        <DivFrameIcon><BtnMau className="daDat"></BtnMau><p>Ghế đã đặt</p></DivFrameIcon>
                        <DivFrameIcon><BtnMau className="chuaDat"></BtnMau><p>Ghế chưa đặt</p></DivFrameIcon>
                        <DivFrameIcon><BtnMau className="dangChon"></BtnMau><p>Ghế đang chọn</p></DivFrameIcon>
                    </DivFrameDanhSachChonGhiChu>
                    {this.state.choiceGhe?<TableBooking>
                        <table className="table table-striped table-dark table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Tổng tiền</td>
                                <td colSpan="2">{this.renderGiaTien()}</td>
                            </tr>
                            <tr><td colSpan="3">
                                <button onClick={()=>this.handleOnClickBooking()} className="btn btn-success">Đặt vé</button>
                            </td></tr>
                        </tfoot>
                    </table>
                    </TableBooking>:''}
                </DivFrame>
            )
        }
    }

    handleOnClickBooking = ()=>{
        Swal.fire({
            title: 'Đặt vé xem phim',
            text: "Bạn chắc chăn muốn đặt vé chứ!!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ĐỒNG Ý',
            cancelButtonText: 'KHÔNG',
          }).then((result) => {
            if (result.isConfirmed) {
                const danhSachGhe = this.props.danhSachGhe
                const arr = danhSachGhe.filter(item=>item.dangChon===true)

                const data = {
                    maLichChieu:this.props.match.params.maLichChieu,
                    danhSachVe:arr,
                }
                
                this.props.dispatch({
                    type: BOOKING_CHAIR_SAGA,
                    object: data,
                    history:this.props.history,
                })
            }
          })
    }

    renderTable = () => {
        const danhSachGhe = this.props.danhSachGhe
        if(danhSachGhe){
            const arr = danhSachGhe.filter(item=>item.dangChon===true)
            return arr.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{item.tenGhe}</td>
                        <td>{item.giaVe}</td>
                        <Td onClick={()=>this.handleOnClickDelete(item.maGhe)}>X</Td>
                </tr>
                )        
            })
        }
    }

    handleOnClickDelete = (maGhe)=>{
        this.props.dispatch({
            type:DELETE_GHE,
            maGhe:maGhe
        })
        this.forceUpdate()
        this.showTable()
        
    }

    showTable = ()=>{
        const danhSachGhe = this.props.danhSachGhe
        const arr = danhSachGhe.filter(item=>item.dangChon===true)
        console.log(arr.length)
        if(arr.length !== 0){
            this.setState({
                choiceGhe: true,
            })
        }else{
            this.setState({
                choiceGhe: false,
            })
        }
    }


    renderGiaTien = ()=>{
        const danhSachGhe = this.props.danhSachGhe
        if(danhSachGhe){
            const arr = danhSachGhe.filter(item=>item.dangChon===true)
            return arr.reduce((total,item,index)=>{
               return total += item.giaVe      
            },0)
        }
    }

    render() {
        return (
            <div>
                <div className="booking__carousel">
                    <CaroselChiTietPhim />
                </div>
                <div className="booking__tickets py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 text-center">
                                <div>
                                    <h1>Thời gian giữ ghế</h1>
                                    <CountdownClock/>
                                </div>
                                <ImgScreen src={screen} alt="true"/>
                                {this.renderGhe()}
                            </div>
                            <div className="col-md-4">
                                <h1 className="text-center">Chi tiết</h1>
                                <div className="row">
                                    {this.renderChiTietDat()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch({
            type: GET_PHONGVE_SAGA,
            maLichChieu: this.props.match.params.maLichChieu
        })
    }


}

const mapStateToProps = (state) => {
    return {
        thongTinPhim: state.arrDataPhongVeReducer.thongTinPhim,
        danhSachGhe: state.arrDataPhongVeReducer.danhSachGhe,
    }
}

export default connect(mapStateToProps)(Booking)