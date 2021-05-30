import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HIDE_MODAL, LOGIN_USER_SAGA } from '../../Redux/Types/auth-type'
import { BookingContent, BookingImg,BookingForm, FormInput, Img, FormLogin } from '../../StyledComponent/Login/DangKyStyled'
import { withRouter } from "react-router";

class DangNhap extends Component {
    constructor(props){
        super(props)
        this.state={
           user:{
                taiKhoan:'',
                matKhau:'',
           }
        }
    }

    onChangeValue = (e) =>{
        const {name,value} = e.target
        this.setState({
            user:{
                ...this.state.user,
                [name]:value,
            }
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(1)
        this.props.dispatch({
            type:LOGIN_USER_SAGA,
            user: this.state.user,
            history:this.props.history,
        })
        this.props.dispatch({
            type: HIDE_MODAL
        })
    }

    render() {
        return (
            <BookingContent className="booking-content">
                <BookingImg className="booking-image">
                    <Img className="booking-img" src="https://source.unsplash.com/collection/190727/300x500" alt="Booking Image" />
                </BookingImg>
                <BookingForm className="booking-form">
                    <FormLogin id="booking-form" onSubmit={(event)=>this.handleSubmit(event)}>
                        <h2 className="text-center">Đăng Nhập</h2>
                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="taiKhoan" id="taiKhoan"  required />
                            <label htmlFor="taiKhoan" className="form-label">Tài khoản</label>
                        </FormInput>
                        <FormInput className="form-group form-input">
                            <input onChange={this.onChangeValue} type="text" name="matKhau" id="matKhau"  required />
                            <label htmlFor="matKhau" className="form-label">Mật khẩu</label>
                        </FormInput>
                        <div className="form-submit text-center">
                            <input type="submit" value="Đăng nhập" className="submit btn btn-success" id="submit" name="submit" />
                        </div>
                    </FormLogin>
                </BookingForm>
            </BookingContent>

        )
    }
}


export default connect(null) (withRouter(DangNhap))