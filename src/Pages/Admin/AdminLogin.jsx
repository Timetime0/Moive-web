import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN_ADMIN_SAGA } from '../../Redux/Types/auth-type'
import { BookingContent, BookingFormAdmin, BookingImgAdmin, Form, FormInput, Img } from '../../StyledComponent/Login/DangKyStyled'

class AdminLogin extends Component {
    constructor(props){
        super(props)
        this.state={
            taiKhoan:'',
            matKhau:'',
        }
    }

    // AdminLogin
    onChangeValue = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()  
        this.props.dispatch({
            type:LOGIN_ADMIN_SAGA,
            user: this.state,
            history:this.props.history
        })
    }




    render() {
        const userAdmin = localStorage.getItem('admin')
       if(!userAdmin){
            return (
                <BookingContent className="booking-content">
                    <BookingImgAdmin className="booking-image">
                        <Img className="booking-img" src="https://source.unsplash.com/collection/190727/1000x500" alt="Booking Image" />
                    </BookingImgAdmin>
                    <BookingFormAdmin className="booking-form">
                        <Form id="booking-form" onSubmit={(event)=>this.handleSubmit(event)}>
                            <h2 className="text-center">Đăng nhập</h2>
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
                        </Form>
                    </BookingFormAdmin>
                </BookingContent>
            )
        }else{
            return(
                <div>
                   {this.props.history.push('/admin')}
                </div>
            )
        }
       
    }
}

const mapStateToProp = (state) => {
    return{
        admin : state.userReducer.user.admin
    }
}


export default connect(mapStateToProp) (AdminLogin)