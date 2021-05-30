import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DELETE_NGUOIDUNG_SAGA, FIND_DATA_NGUOIDUNG_SAGA, GET_DATA_NGUOIDUNG_SAGA, GET_DATA_NGUOIDUNG_THEOTRANG_SAGA } from '../../../Redux/Types/Admin/quanLyNguoiDungType'
import { ButtonAd, ButtonThem, DivModalAd, Li, Trang } from '../../../StyledComponent/Admin/QuanLyNguoiDung/quanLyNguoiDung'
import { ButtonCloseAd } from '../../../StyledComponent/Login/DangKyStyled'
import Form from '../QuanLyNguoiDung/Form'
// import FindNguoiDung from './FindNguoiDung'
class QuanLyNguoiDung extends Component {

    constructor(props) {
        super(props)
        this.state = {
            danhSach:'',
            selected: 1,
            findHoTen: '',
            status: '',
            user: '',
        }
    }

    renderPaging = () => {
        const number = this.props.soLuongTrang
        const arr = []
        for (let i = 0; i < number; i++) {
            arr.push(i)
        }
        return arr?.map((item, index) => {
            return (
                <Li key={index} name={index + 1} onClick={() => this.onClickRender(index + 1, 'get')} className={this.isActive(index + 1, 'get')}><div className="page-link">{index + 1}</div></Li>
            )
        })
    }

    isActive = (index, method) => {
        const className = 'page-item'
        if (method === 'get') {
            if (index === this.state.selected) {
                return 'page-item active'
            } else {
                return className
            }
        }
    }

    onClickRender = (number, method) => {
        if (method === 'get') {
            this.setState({
                selected: number
            })

            this.props.dispatch({
                type: GET_DATA_NGUOIDUNG_THEOTRANG_SAGA,
                soTrang: `${number}`,
                soPhanTuTrang: 20,
            })
        }
    }

    renderGiaoDien = () => {
            return this.props.danhSach.items?.map((item, index) => {
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
                            <button className="btn btn-success mr-1" onClick={() => this.handleModalWithFix(item)} data-toggle="modal" data-target="#exampleModal">Sửa</button>
                            <button className="btn btn-danger" onClick={() => this.handleDeleteUser(item.taiKhoan)}>Xóa</button>
                        </td>
                    </tr>
                )
            })
      
    }

    handleDeleteUser = (taiKhoan) => {
        this.setState({
            status: 'delete',
        })
        this.props.dispatch({
            type: DELETE_NGUOIDUNG_SAGA,
            taiKhoan: taiKhoan,
            soTrang: this.state.selected,
            soPhanTuTrang: 20,
        })


    }

    // cần render lại mỗi khi thao tác
    handleOnSubmitTimKiem = (e) => {
        e.preventDefault()
       
        this.setState({
            status: 'find',
        })

        const newStr = this.state.findHoTen.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g,' ')
        this.props.dispatch({
            type: FIND_DATA_NGUOIDUNG_SAGA,
            tuKhoa: newStr,
        })
      
    }

    renderDataFinding = ()=>{
        
    }


    onChangInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleModalWithFix = (item) => {
        this.setState({
            status: 'fix',
            user: item,
        })
    }

    handleModalWithAdd = () => {
        this.setState({
            status: 'add',
            user: ''
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
                            <div className="col-6 text-center"><Trang className="btn mx-2 ">Trang {this.state.selected}</Trang></div>
                            <ButtonThem onClick={() => this.handleModalWithAdd()} data-toggle="modal" data-target="#exampleModal" className="btn btn-primary col-2">Thêm người dùng</ButtonThem>
                            <div className=" col-4">
                                <form className="input-group" onSubmit={this.handleOnSubmitTimKiem}>
                                    <div className="input-group-prepend">
                                        <button onClick={this.renderDataFinding} id="find-user" type="submit" className="input-group-text"><i className="fa fa-search"></i></button>
                                    </div>
                                    <input onChange={this.onChangInput} type="text" className="form-control find-user"  placeholder="Họ Tên hoặc Tài Khoản" name="findHoTen"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ Tên</th>
                                    <th scope="col">Tài khoản</th>
                                    <th scope="col">Mật khẩu</th>
                                    <th scope="col">Email</th>
                                    <th scope="col" >SĐT</th>
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
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <DivModalAd className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <ButtonAd type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </ButtonAd>
                                <Form status={this.state.status} user={this.state.user} selected={this.state.selected}/>
                                <ButtonCloseAd type="button" className="btn btn-danger" data-dismiss="modal">Close</ButtonCloseAd>
                            </div>
                        </div>
                    </DivModalAd>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch({
            type: GET_DATA_NGUOIDUNG_SAGA
        })
        this.props.dispatch({
            type: GET_DATA_NGUOIDUNG_THEOTRANG_SAGA,
            soTrang: 1,
            soPhanTuTrang: 20,
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.danhSach.items !== prevProps.danhSach.items) {
            if(this.state.status === "find"){   
               this.forceUpdate()
            }
        }
    }
}


const mapStateToProps = (state) => {
    return {
        soLuongTrang: state.arrDataNguoiDungReducer.soTrang,
        danhSach: state.arrDataNguoiDungReducer.danhSach,
        danhSachTimKiem: state.arrDataNguoiDungReducer.danhSachTimKiem
    }
}

export default connect(mapStateToProps)(QuanLyNguoiDung)

