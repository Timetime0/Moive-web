import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DELETE_PHIM_SAGA, FIND_PHIM, GET_DATA_PHIM_THEOTRANG_SAGA } from '../../../Redux/Types/Admin/quanLyPhimType'
import { GET_DATA_PHIM_SAGA } from '../../../Redux/Types/DataPhimType'
import { ButtonAd, ButtonThem, DivDetailSearch, DivFrameSeacch, DivModalAd, Li, Trang } from '../../../StyledComponent/Admin/QuanLyNguoiDung/quanLyNguoiDung'
import {  ButtonCloseAdPhim } from '../../../StyledComponent/Login/DangKyStyled'
import FormPhim from './FormPhim'
import $ from 'jquery'

class QuanLyPhim extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 1,
            data: [],
            searchInput: "",
            show: false,
            status:'',
            phim: '',
        }
    }

    onChangInput = (e) => {
        const { value } = e.target
        if (value === "" || value.length === 0) {
            this.setState({
                show: false,
                searchInput: value,
            })
        } else {
            this.setState({
                show: true,
                searchInput: value
            },
                () => { this.globalSearch() }
            )
        }
    }

    globalSearch = () => {
        const { searchInput } = this.state;
        const newStr = searchInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, ' ').split(" ").join("-");

        let filteredData = this.props.danhSach.filter(value => {
            return (
                value.biDanh.includes(newStr)
            )
        })
        this.setState({
            data: filteredData
        })
    }


    isActive = (index, method) => {
        const className = 'page-item'
        if (index === this.state.selected) {
            return 'page-item active'
        } else {
            return className
        }
    }
    onClickRender = (number, method) => {
        this.setState({
            selected: number
        })

        this.props.dispatch({
            type: GET_DATA_PHIM_THEOTRANG_SAGA,
            soTrang: `${number}`,
            soPhanTuTrang: 5,
        })
    }


    renderPaging = () => {
        const number = this.props.danhSachPhimTheoTrang.totalPages
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

    renderGiaoDien = () => {
        return this.props.danhSachPhimTheoTrang.items?.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maPhim}</td>
                    <td>{item.tenPhim}</td>
                    <td>{item.biDanh}</td>
                    <td>
                        <iframe width="250" height="200" src={item.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </td>
                    <td><img src={item.hinhAnh} width="250" height="200" alt="trur" /></td>
                    <td style={{ fontSize: '14px' }} width='200'>{item.moTa}</td>
                    <td>{item.ngayKhoiChieu}</td>
                    <td>{item.danhGia}</td>
                    <td>
                        <button onClick={()=>this.onClickFixPhim(item)}className="btn btn-success" data-toggle="modal" data-target="#PhimAdmin">Sửa</button>
                        <button onClick={()=>this.onClickDeletePhim(item.maPhim)}className="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    onClickFixPhim = (phim) =>{
        this.setState({
            status:'fix',
            phim:phim
        })
    }

    
    onClickDeletePhim = (maPhim) =>{
        this.setState({
            status:'delete',
        })
        this.props.dispatch({
            type:DELETE_PHIM_SAGA,
            maPhim:maPhim,
            soTrang: this.state.selected,
            soPhanTuTrang: 5,
        })
    }

    onClickUpdatePhim = ()=>{
        this.setState({
            status:'update',
            phim:"",
            
        })
    }

    renderDataSearch = () => {
        return this.state.data?.map((item, index) => {
            return <DivDetailSearch onClick={this.onClickDetailFinding} className="">{item.tenPhim}</DivDetailSearch>
        })
    }
    
    onClickDetailFinding = (e)=> {
        this.setState({
            searchInput: e.target.innerHTML,
            show:false,
        })
    }

    handleOnSubmit = (e)=> {
        e.preventDefault()
        this.props.dispatch({
            type: FIND_PHIM,
            key: this.state.searchInput
        })
        this.forceUpdate()
        this.setState({
            show: false
        })
    }

    onHiddenModal = ()=>{
        $("#modalPhim .close").click()
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
                            <ButtonThem onClick={()=>this.onClickUpdatePhim()} className="btn btn-primary col-2" data-toggle="modal" data-target="#PhimAdmin">Thêm Phim</ButtonThem>
                            <div className=" col-4">
                                <form className="input-group" onSubmit={this.handleOnSubmit}>
                                    <div className="input-group-prepend">
                                        <button onClick={this.renderTimKiem} type="submit" className="input-group-text"><i className="fa fa-search"></i></button>
                                    </div>
                                    <input
                                        onChange={this.onChangInput}
                                        type="text" className='form-control' value={this.state.searchInput} id="inlineFormInputGroup" placeholder='Họ Tên' name="findHoTen" autoComplete="off"
                                    />
                                </form>
                                <DivFrameSeacch>
                                    {this.state.show ? this.renderDataSearch() : ""}
                                </DivFrameSeacch>
                            </div>

                        </div>
                    </div>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Mã Phim</th>
                                <th scope="col">Tên Phim</th>
                                <th scope="col">Bí danh</th>
                                <th scope="col">Trailer</th>
                                <th scope="col">Hình Ảnh</th>
                                <th scope="col">Mô tả</th>
                                <th scope="col">Ngày Khởi chiếu</th>
                                <th scope="col">Đánh giá</th>
                                <th scope="col"><></></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGiaoDien()}
                        </tbody>
                    </table>

                </div>

                <div className="modal fade" id="PhimAdmin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <DivModalAd className="modal-dialog" id="modalPhim">
                        <div className="modal-content">
                            <div className="modal-body">
                                <ButtonAd type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </ButtonAd>
                                <FormPhim onHiddenModal={this.onHiddenModal} status={this.state.status} phim={this.state.phim} selected={this.state.selected} trangCuoi={this.props.danhSachPhimTheoTrang.totalPages}/>
                                <ButtonCloseAdPhim type="button" className="btn btn-danger" data-dismiss="modal">Close</ButtonCloseAdPhim>
                            </div>
                        </div>
                    </DivModalAd>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch({
            type: GET_DATA_PHIM_THEOTRANG_SAGA,
            soTrang: 1,
            soPhanTuTrang: 5,
        })
        this.props.dispatch({ type: GET_DATA_PHIM_SAGA })
    }

    componentDidUpdate(){
        
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachPhimTheoTrang: state.arrDataPhimReducer.danhSachPhimTheoTrang,
        danhSach: state.arrDataPhimReducer.arrData
    }
}



export default connect(mapStateToProps)(QuanLyPhim)