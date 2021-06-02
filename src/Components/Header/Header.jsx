import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BtnHeader, ButtonToggle, ImgLogo, Nav, NavHashLinkT, NavLinkT } from '../../StyledComponent/Header/Header'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";
import { LOGOUT_USER } from '../../Redux/Types/auth-type';

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: "",
            admin: "",
            show_fixNav: true,
        }
    }


    hanleLogOut = () => {
        localStorage.removeItem('client')
        this.setState({
            client: ""
        })
        this.props.dispatch({
            type: LOGOUT_USER
        })
    }

    hanleLogIn = () => {
        this.props.history.push('/login')
    }

    renderAccount = () => {
        const value = this.state.client
        if (value) {
            return (<div className="btn-user ml-auto pr-1">
                <BtnHeader onClick={() => { this.props.history.push('/profile') }} className="px-3 btn btn-outline-success mr-2"> Hi: {this.state.client.taiKhoan}</BtnHeader>
                <BtnHeader onClick={this.hanleLogOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng xuất</BtnHeader>
            </div>)
        } else {
            return (<>
                <div className="btn-user ml-auto pr-1">
                    <BtnHeader onClick={this.hanleLogIn} className="btn btn-outline-success my-2 my-sm-0 " type="submit">Đăng nhập</BtnHeader>
                </div>
            </>)
        }


    }
    linkToLichChieuPhim = () => {
        return this.props.history.replace('/rapchieuphim')
    }

    toggleVisibility() {
        if (window.pageYOffset > 200) {
            this.setState({
                show_fixNav: false
            });
        } else {
            this.setState({
                show_fixNav: true
            });
        }
    }


    render() {
        return (
            <Nav className={this.state.show_fixNav?'navbar navbar-expand-md navbar-dark py-0':'navbar navbar-expand-md navbar-dark py-0 nav-faded'}>
                    <NavLink className="navbar-brand m-0" to="/" id="timetime" > <ImgLogo src="/Assets/img/logo/logo-removebg.png" alt="true" /></NavLink >
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <NavHashLinkT activeStyle={{ color: `${props => props.theme.btnPrimaryColor}` }} className="nav-link" to="/home/#lichChieuPhim">Lịch chiếu</NavHashLinkT>
                            </li>
                            <li className="nav-item">
                                <NavLinkT activeStyle={{ color: `${props => props.theme.btnPrimaryColor}` }} className="nav-link" to="/rapchieuphim">Rạp phim</NavLinkT>
                            </li>
                            <li className="nav-item ">
                                <NavHashLinkT activeStyle={{ color: `${props => props.theme.btnPrimaryColor}` }} className="nav-link" to="/home/#tinTuc">Tin Tức</NavHashLinkT>
                            </li>
                            <li className="nav-item ">
                                <NavHashLinkT activeStyle={{ color: `${props => props.theme.btnPrimaryColor}` }} className="nav-link" to="/home/#quangCao">Quảng Cáo</NavHashLinkT>
                            </li>
    
                            <li className="nav-item">
                                <NavLinkT activeStyle={{ color: `${props => props.theme.btnPrimaryColor}` }} className="nav-link" to="/admin/login">Admin</NavLinkT>
                            </li>
    
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                        </div>
                    </div>
                    { this.renderAccount()}
                    <ButtonToggle className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </ButtonToggle>
            </Nav >
        )
        
    }
    


    componentDidUpdate(prevProps, prevState) {
        if (prevState.admin !== this.props.admin) {
            this.setState({
                admin: this.props.admin,
                client: this.props.client
            })
        }
        if (prevState.client !== this.props.client) {
            this.setState({
                client: this.props.client
            })
        }
    }

    componentDidMount() {
        let scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

}


const mapStateToProps = (state) => {
    return {
        admin: state.userReducer.user.admin,
        client: state.userReducer.user.client
    }
}


export default connect(mapStateToProps)(withRouter(Header))
