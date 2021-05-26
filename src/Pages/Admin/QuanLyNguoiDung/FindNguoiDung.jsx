import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FIND_DATA_NGUOIDUNG_THEOTRANG_SAGA } from '../../../Redux/Types/Admin/quanLyNguoiDungType'
import { Li, Trang } from '../../../StyledComponent/Admin/QuanLyNguoiDung/quanLyNguoiDung'

 class FindNguoiDung extends Component {

    constructor(props){
        super(props)
        this.state= {
            number:1
        }
    }

    renderPaging = () => {
        const number = this.props.danhSachTimKiem.totalPages
        console.log(number)
        const arr = []
        for (let i = 0; i < number; i++) {
            arr.push(i)
        }
        return arr?.map((item, index) => {
            return (
                <Li key={index} name={index + 1} onClick={() => this.onClickRender(index + 1)} className={this.isActive(index + 1)}><div className="page-link">{index + 1}</div></Li>
            )
        })
    }

    isActive = (index) => {
        const className = 'page-item'
        if (index === this.state.number) {
            return 'page-item active'
        } else {
            return className
        }
    }


    onClickRender = (number) => {
        this.setState({
            number: number
        })

        this.props.dispatch({
            type: FIND_DATA_NGUOIDUNG_THEOTRANG_SAGA,
            tuKhoa:this.props.tuKhoa,
            soTrang: `${number}`,
            soPhanTuTrang: 20,
        })
    }

    renderGiaoDien = () => {
        return this.props.danhSachTimKiem.items?.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.hoTen}</td>
                    <td>{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td>
                        <button className="btn btn-success">Sửa</button>
                        <button className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination flex-wrap">
                            <li className="page-item">
                                <div className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </div>
                            </li>
                          {this.renderPaging()}
                            <li className="page-item">
                                <div className="page-link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <div className="container-fluid">
                        <div className="row my-1">
                            <div className="col-6 text-center"><Trang className="btn  mx-2 ">Trang {this.state.selected}</Trang></div>
                        </div>
                    </div>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Họ Tên</th>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Mật khẩu</th>
                                <th scope="col">Email</th>
                                <th scope="col">SĐT</th>
                                <th scope="col">Mã người dùng</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGiaoDien()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=> {
    return{
        danhSachTimKiem: state.arrDataNguoiDungReducer.danhSachTimKiem
    }
}


export default connect(mapStateToProps) (FindNguoiDung)