import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GET_DATA_CUM_THEATER_SAGA, GET_INFOR_THEATER_SAGA } from '../../Redux/Types/dataRapPhim'
import { DivFrameLogoRap, ImgLogoRap, DivNameRap, DivHoverLogo, DivTenCumRap, ImgCarousel, DivFrameCarousel, LinkRap, Logo } from '../../StyledComponent/RapChieuPhim/RapChieuPhim'
import hinhAnh from '../../Assets/img/rapChieuPhim/lich-chieu-1.jpg'
import { DivChiTietRap, DivScreen, ImgLogoCumRap } from '../../StyledComponent/RapChieuPhim/CumRap'
import { getRenderChiTietRap } from '../../Redux/Actions/arrRapPhimAction'

let logo = ''

class RapChieuPhim extends Component {

    handleOnChangeLogo =(event) => {
        console.log(event)
    }

    renderLogoRapChieuPhim = () => {
        return this.props.arrData.map((rap, index) => {
            return (
                <div key={index} className="col-4 col-md-2 py-3">
                    <div>
                        <DivFrameLogoRap>
                            <ImgLogoRap name={rap.maHeThongRap} src={rap.logo} onMouseEnter={(event)=>{
                                 this.props.dispatch({  type: GET_DATA_CUM_THEATER_SAGA, 
                                                        maHeThong: rap.maHeThongRap, 
                                                        renderGiaoDien: this.props.renderGiaoDien.logo.maHeThongRap })
                                logo = event.target.src
                            }
                            }/>
                        </DivFrameLogoRap>
                        <DivNameRap>
                            {rap.tenHeThongRap}
                        </DivNameRap>
                    </div>
                </div>
            )
        })
    }

    handleThongTinChiTiet = (cum) => {
        this.props.dispatch(getRenderChiTietRap(cum, logo))
        this.forceUpdate()
    }

    renderCumRapChieuPhim = () => {
        return this.props.arrCumRap.map((cum, index) => {
            return (
                <div key={index} className="col-md-3 col-6">
                    <DivTenCumRap onClick={() => this.handleThongTinChiTiet(cum)}>
                        <LinkRap href='#chiTietRap'>{cum.tenCumRap}</LinkRap>
                    </DivTenCumRap>
                </div>
            )
        })
    }

    renderScreen = (chiTietRap)=> {
        if(chiTietRap){
            return chiTietRap.map((item, index)=>{
                return <DivScreen className="col-md-2 col-3" key={index}>{item.tenRap} - {item.maRap}</DivScreen>
            })
        }
    }

    renderNumber = (danhSach) => {
        const count = 0
        if(danhSach){
            return danhSach.reduce((count, index)=>{
                return  count += 1
            },0)
        }
        return count
    }

    render() {
        const {logo, chiTiet} = this.props.renderGiaoDien
        return (
            <div className="rapPhim">
                <div className="container-md container-fluid">
                    <Logo className="logo">
                        <div className="row">
                            {this.renderLogoRapChieuPhim()}
                        </div>
                        <DivHoverLogo className="row divHoverLogo">
                            {this.renderCumRapChieuPhim()}
                        </DivHoverLogo>
                    </Logo>
                </div>

                <DivFrameCarousel className="container-fliud">
                    <ImgCarousel src={hinhAnh} alt="true" />
                </DivFrameCarousel>

                <DivChiTietRap className="container pt-sm-3 text-center" id="chiTietRap">
                    <div className="rapPhim__content">
                       {logo && chiTiet? <>
                            <div className="row">
                                <div className="col-sm-2">
                                    <ImgLogoCumRap src={logo} alt="" />
                                </div>
                                <div className="col-sm-10">
                                    <h2>{chiTiet.tenCumRap}</h2>
                                    <h6>{chiTiet.diaChi}</h6>
                                    <p>Tổng số rạp:{this.renderNumber(chiTiet.danhSachRap)}</p>
                                    <div className="row justify-content-center"> {this.renderScreen(chiTiet.danhSachRap)}</div>
                                </div>
                            </div>
                        </>:""}
                    </div>
                </DivChiTietRap>
            </div>
        )
    }


    async componentDidMount() {
        this.props.dispatch({ type: GET_INFOR_THEATER_SAGA })
    }
}


const mapStateToProps = (state) => {
    return {
        arrData: state.arrDataRapPhimReducer.arrData,
        arrCumRap: state.arrDataRapPhimReducer.arrCumRap,
        renderGiaoDien: state.arrDataRapPhimReducer.renderGiaoDien,
    }
}

export default connect(mapStateToProps)(RapChieuPhim)
