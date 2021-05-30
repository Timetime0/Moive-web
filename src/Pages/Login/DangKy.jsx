import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SIGN_UP_SAGA } from '../../Redux/Types/auth-type'
import { BookingContent, BookingImg,BookingForm,Form, FormInput, Img } from '../../StyledComponent/Login/DangKyStyled'
import { withRouter } from "react-router";
 class DangKy extends Component {
    constructor(props){
        super(props)
        this.state={
           user:{
                taiKhoan:'',
                matKhau:'',
                email:'',
                sdt:'',
                maNhom:'gp01',
                maLoai:'KhachHang',
                hoTen:'',
           }
        }
    }

    onChangeValue = (e) =>{
        const {name,value} = e.target
        this.setState({
            user:{
                ...this.state.user,
                [name]:value
            }   
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.dispatch({
            type:SIGN_UP_SAGA,
            user: this.state.user,
            history:this.props.history,
        })
    }

    render() {
        return (
            <BookingContent className="booking-content">
                <BookingImg className="booking-image">
                    <Img className="booking-img" src="https://source.unsplash.com/collection/190727/300x500" alt="Booking Image" />
                </BookingImg>
                <BookingForm className="booking-form">
                    <Form id="booking-form" onSubmit={(event)=>this.handleSubmit(event)}>
                        <h2 className="text-center">Đăng ký</h2>
                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="taiKhoan" id="taiKhoan"  required />
                            <label htmlFor="taiKhoan" className="form-label">Tài khoản</label>
                        </FormInput>
                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="matKhau" id="matKhau"  required />
                            <label htmlFor="matKhau" className="form-label">Mật khẩu</label>
                        </FormInput>

                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="email" id="email"  required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </FormInput>

                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="sdt" id="sdt"  required />
                            <label htmlFor="sdt" className="form-label">Sđt</label>
                        </FormInput>


                        <FormInput className="form-group form-input" style={{display:'none'}}>
                            <input onChange={this.onChangeValue} type="text" name="maNhom" id="maNhom" value="gp01" required  />
                            <label htmlFor="maNhom" className="form-label">Mã nhóm</label>
                        </FormInput>

                        <FormInput className="form-group form-input displayNone" style={{display:'none'}}>
                            <input onChange={this.onChangeValue} type="text" name="maLoai" id="maLoai"  value="KhachHang" required />
                            <label htmlFor="maLoai" className="form-label">Mã loai người dùng</label>
                        </FormInput>

                        <FormInput className="form-group form-input displayNone" >
                            <input onChange={this.onChangeValue} type="text" name="hoTen" id="hoTen" required />
                            <label htmlFor="hoTen" className="form-label">Họ tên</label>
                        </FormInput>

                        <div className="form-submit text-center">
                            <input type="submit" value="Đăng ký" className="submit btn btn-success" id="submit" name="submit" />
                        </div>
                    </Form>
                </BookingForm>
            </BookingContent>

        )
    }
}


export default connect(null) (withRouter(DangKy))