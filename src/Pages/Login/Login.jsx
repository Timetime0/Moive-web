import React, { Component } from 'react'
import { BgImage, ContainerLogin, Content, DivFrameLogin, DivImgLogin,DivModal,LinkImgLogin, PLogin, PopupCu} from '../../StyledComponent/Login/LoginStyled'
import DangKy from './DangKy';



class Login extends Component {

    renderOnClickLogin = ()=> {
        console.log(1)
        return(
            <div>laksjdlkasjd</div>
        )
    }
    render() {
        return (
            <ContainerLogin>
                <Content>
                    <BgImage />
                    <DivFrameLogin>
                        <h2 style={{paddingBottom:120}}>TimeTime Cinemax <br></br> đang chờ bạn <br></br> ^O^ </h2>
                        <p>Đăng nhập để được nhiều ưu đãi,<br></br> mua vé và bảo mật thông tin!</p>

                            <LinkImgLogin>
                                <DivImgLogin onClick={this.renderOnClickLogin} inputBgColor="#3f64b7" inputBgColorHover="#fff">
                                    <i style={{ padding: '0 25px', lineHeight:'25px'}} className="fab fa-facebook-f"></i>
                                    <PLogin className="login__p">Login with Facebook</PLogin>
                                </DivImgLogin>
                            </LinkImgLogin>
                        

                            <LinkImgLogin>
                                <DivImgLogin onClick={this.renderOnClickLogin} inputBgColor="#000" inputBgColorHover="#fff">
                                    <i style={{ padding: '0 25px', lineHeight:'25px'}} className="fab fa-github"></i>
                                    <PLogin className="login__p">Login with Git</PLogin>
                                </DivImgLogin>
                            </LinkImgLogin>

                            <LinkImgLogin>
                                <DivImgLogin onClick={this.renderOnClickLogin} inputBgColor="#4285f4" inputBgColorHover="#fff">
                                    <i style={{ padding: '0 25px', lineHeight:'25px'}} className="fab fa-google"></i>
                                    <PLogin  inputBgColor="#000" className="login__p">Login with Google</PLogin>
                                </DivImgLogin>
                            </LinkImgLogin>

                            <PopupCu
                                trigger={open => (
                                    <button className="btn btn-success">Tạo tài khoản</button>
                                )}
                                modal nested>

                               {close => (<DivModal className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <div className="content">
                                        <DangKy/>
                                    </div>
                                </DivModal>)}
                            </PopupCu>

                       
                    </DivFrameLogin>
                </Content>
            </ContainerLogin>
        )
    }
}

export default Login
