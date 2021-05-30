import React, { Component } from 'react'
import { connect } from 'react-redux';
import { BgImage, ContainerLogin, Content, DivFrameLogin, DivImgLogin, DivModal, DivModalLogin, LinkImgLogin, PLogin, PopupCu, ButtonModalLogin, DivModalContent, ButtonModalSignUp } from '../../StyledComponent/Login/LoginStyled'
import DangKy from './DangKy';
import DangNhap from './DangNhap';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: true
        }
    }


    render() {
        return (
            <ContainerLogin id="loginIntheHeader">
                <Content>
                    <BgImage />
                    <DivFrameLogin>
                        <h2 style={{ paddingBottom: 80 }}>TimeTime Cinemax <br></br> đang chờ bạn <br></br> ^O^ </h2>
                        <p>Đăng nhập để được nhiều ưu đãi,<br></br> mua vé và bảo mật thông tin!</p>

                        <LinkImgLogin>
                            <DivImgLogin data-toggle="modal" data-target="#login" inputBgColor="#3f64b7" inputBgColorHover="#fff">
                                <i style={{ padding: '0 25px', lineHeight: '25px' }} className="fab fa-facebook-f"></i>
                                <PLogin className="login__p">Login with Facebook</PLogin>
                            </DivImgLogin>
                        </LinkImgLogin>


                        <LinkImgLogin>
                            <DivImgLogin data-toggle="modal" data-target="#login" inputBgColor="#000" inputBgColorHover="#fff">
                                <i style={{ padding: '0 25px', lineHeight: '25px' }} className="fab fa-github"></i>
                                <PLogin className="login__p">Login with Git</PLogin>
                            </DivImgLogin>
                        </LinkImgLogin>

                        <LinkImgLogin>
                            <DivImgLogin data-toggle="modal" data-target="#login" inputBgColor="#4285f4" inputBgColorHover="#fff">
                                <i style={{ padding: '0 25px', lineHeight: '25px' }} className="fab fa-google"></i>
                                <PLogin inputBgColor="#000" className="login__p">Login with Google</PLogin>
                            </DivImgLogin>
                        </LinkImgLogin>

                        <PopupCu
                            trigger={open => (
                                <button className="btn btn-success">Tạo tài khoản</button>
                            )}
                            modal nested>
                            {close => (<DivModal className="modal">
                                <ButtonModalSignUp className="close" onClick={close}>&times;</ButtonModalSignUp>
                                <div className="content">
                                    <DangKy />
                                </div>
                            </DivModal>)}
                        </PopupCu>

                        <div>
                            <div show={this.state.showModal} className="modal fade" id="login" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog" >
                                <DivModalLogin className="modal-dialog">
                                    <DivModalContent className="modal-content">
                                        <div className="modal-body" >
                                            <ButtonModalLogin type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </ButtonModalLogin>
                                            <DangNhap />
                                        </div>
                                    </DivModalContent>
                                </DivModalLogin>
                            </div>
                        </div>
                    </DivFrameLogin>
                </Content>
            </ContainerLogin>
        )
    }

    goToTheHeader = ()=>{
        return window.$('html,body').scrollTop(0);
    }

    componentDidMount(){
        this.goToTheHeader()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.showModal !== this.props.showModal) {
            window.$('#login').modal('hide')
        }
    }

}


const mapStateToProps = (state) => {
    return {
        showModal: state.userReducer.showModal
    }
}

export default connect(mapStateToProps)(Login)


