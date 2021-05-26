import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { LOGOUT_ADMIN } from '../../Redux/Types/auth-type'
import { Ul } from '../../StyledComponent/Admin/admin'
import QuanLyDatVe from './QuanLyDatVe/QuanLyDatVe'
import QuanLyNguoiDung from './QuanLyNguoiDung/QuanLyNguoiDung'
import QuanLyPhim from './QuanLyPhim/QuanLyPhim.jsx'


class Admin extends Component {

  hanleLogOut = () => {
    localStorage.removeItem('admin')
    this.props.dispatch({
      type: LOGOUT_ADMIN
    })
    this.props.history.push('/admin/login')
  }



  render() {
    const userAdin = localStorage.getItem('admin')
    // const admin =  JSON.parse(userAdin)
    if(userAdin){
      return (
        <div>
          <div className="conteiner pt-5">
            <div className="row justify-content-end" style={{ marginRight:'0px'}}>
              <div className="col-4">
                <span className="px-3">Admin: {this.props.admin.taiKhoan}</span>
                <button onClick={this.hanleLogOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng xuất</button>
              </div>
            </div>
          </div>
  
          <div className="py-5">
            <Ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Quản lý người dùng</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Quản lý đặt vé</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Quản lý phim</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-rap-tab" data-toggle="pill" href="#pills-rap" role="tab" aria-controls="pills-contact" aria-selected="false">Quản lý rạp</a>
              </li>
            </Ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <QuanLyNguoiDung />
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <QuanLyDatVe />
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <QuanLyPhim />
              </div>
              <div className="tab-pane fade" id="pills-rap" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <Redirect to='/admin/login'/>
      )
    }
   
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.userReducer.user.admin
  }
}

export default connect(mapStateToProps)(Admin)