import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { GET_IN4_CLIENT_SAGA } from '../../Redux/Types/Admin/quanLyNguoiDungType'
import { DivFrameBook, DivFrameIn4, DivFramePer, DivFrameTable } from '../../StyledComponent/Client/client'
class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            in4Client: ''
        }
        this.forceUpdate()
    }

    renderThongTinDatVe = () => {
        const { thongTinDatVe } = this.props.in4Client
        if (thongTinDatVe) {
            return thongTinDatVe.map((item,index)=>{
                return( 
                <tr key={index}>
                    <td>{item.tenPhim}</td>
                    <td>{item.ngayDat}</td>
                    <td>{item.danhSachGhe.map((chiTiet,index)=>{
                        return(
                            <div key={index}>{chiTiet.tenHeThongRap} - {chiTiet.tenRap} - Ghế {chiTiet.tenGhe}</div>
                        )
                    })}</td>
                </tr>
                )
            })    
        }
    }

    renderThongTinClient = () => {
        const clientReducer = this.props.in4Client
        if (clientReducer) {
            return <DivFramePer className="in4__personal">
                <h3>Thông Tin Tài Khoản</h3>
                <div>
                    <p>Họ và tên: {clientReducer.hoTen}</p>
                    <p>Email: {clientReducer.email}</p>
                    <p>Tài khoản: {clientReducer.taiKhoan}</p>
                    <p>Mật khẩu: {clientReducer.matKhau}</p>
                </div>
            </DivFramePer>
        }
    }

    render() {
        const client = localStorage.getItem('client')
        if (client) {
            return (
                <DivFrameIn4 className="in4">
                    {this.renderThongTinClient()}

                    <DivFrameBook className="in4_booking">
                        <h3>Thông Tin Đặt vé</h3>
                        <DivFrameTable className="pb-5">
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Tên Phim</th>
                                        <th scope="col">Ngày đặt</th>
                                        <th scope="col">Danh Sách Ghế</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderThongTinDatVe()}
                                </tbody>
                            </table>
                        </DivFrameTable>

                    </DivFrameBook>
                </DivFrameIn4>
            )
        } else {
            return <Redirect to="/login" />
        }
    }



    componentDidMount() {
        window.$('html,body').scrollTop(0)
        const account = JSON.parse(localStorage.getItem('client')).taiKhoan
        this.props.dispatch({
            type: GET_IN4_CLIENT_SAGA,
            object: { taiKhoan: account },
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     if(this.props.in4Client !== prevState.in4Client){
    //         this.setState({
    //             in4Client: this.props.in4Client
    //         })
    //     }
    // }
}

const mapStateToProps = (state) => {
    return {
        in4Client: state.userReducer.user.in4Client
    }
}


export default connect(mapStateToProps)(UserProfile)



// <Prompt when="false" message = ((location)=>{
//    return "ban co chac muon roi khoi day"
// })
// Cản sự kiện nhập lại trang