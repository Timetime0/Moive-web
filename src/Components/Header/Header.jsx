import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BtnHeader, ImgLogo, Nav, NavHashLinkT, NavLinkT } from '../../StyledComponent/Header/Header'
import { NavLink} from 'react-router-dom'
import { withRouter } from "react-router";

export class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            client:"",
            admin:"",
        }
    }


    // localStorage.removeItem(key)
    hanleLogOut = ()=>{
        localStorage.removeItem('admin')
        this.setState({
            admin:""
        })
    }

    hanleLogIn = ()=>{
        console.log(1)
        this.props.history.push('/login')
    }

    renderAccount = () =>{
        const value = this.state.client
        if(value){
            return (<div className="btn-user ml-auto pr-1">
                        <span className="px-3">Admin: {this.props.admin.taiKhoan}</span>
                        <BtnHeader onClick={this.hanleLogOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng xuất</BtnHeader>
            </div>)
        }else{
            return(<>
                <div className="btn-user ml-auto pr-1">
                    <BtnHeader onClick={this.hanleLogIn} className="btn btn-outline-success my-2 my-sm-0 " type="submit">Đăng nhập</BtnHeader>
                </div>
            </>)
        }

           
    }
    linkToLichChieuPhim = ()=>{
        console.log(1)
        return this.props.history.replace('/rapchieuphim')
    }

    render() {
        
        return (
            <Nav className="navbar navbar-expand-md navbar-dark py-0">
                <NavLink className="navbar-brand m-0" to="/" id="timetime"><ImgLogo src="/Assets/img/logo/logo-removebg.png" alt="true"/></NavLink>
               
               
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item ">
                            <NavHashLinkT activeStyle={{color:`${props=>props.theme.btnPrimaryColor}`}} className="nav-link" to="/home/#lichChieuPhim">Lịch chiếu</NavHashLinkT>
                        </li>
                        <li className="nav-item">
                            <NavLinkT  activeStyle={{color:`${props=>props.theme.btnPrimaryColor}`}} className="nav-link" to="/rapchieuphim">Rạp chiếu phim</NavLinkT>
                        </li>
                        <li className="nav-item ">
                            <NavHashLinkT activeStyle={{color:`${props=>props.theme.btnPrimaryColor}`}} className="nav-link" to="/home/#tinTuc">Tin Tức</NavHashLinkT>
                        </li>
                        <li className="nav-item ">
                            <NavHashLinkT activeStyle={{color:`${props=>props.theme.btnPrimaryColor}`}} className="nav-link" to="/home/#quangCao">Quảng Cáo</NavHashLinkT>
                        </li>

                        <li className="nav-item">
                            <NavLinkT  activeStyle={{color:`${props=>props.theme.btnPrimaryColor}`}} className="nav-link" to="/admin/login">Admin</NavLinkT>
                        </li>
                     
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    </div>
                </div>
                {this.renderAccount()}
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </Nav>
        )
    }


    componentDidUpdate(prevProps, prevState){
        if (prevState.admin !== this.props.admin) {
            this.setState({
                admin:this.props.admin
            })    
        }
    }


}


const mapStateToProps = (state)=>{
    return {
        admin: state.userReducer.user.admin
    }
}


export default connect(mapStateToProps) (withRouter(Header))
