import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import { Container, ContainerFluid } from '../../StyledComponent/Container/Container'
import { ImgLarge, ImgLeft } from '../../StyledComponent/StyledFooter/Div'
import { NavLinks, Link } from '../../StyledComponent/StyledFooter/NavLink'
// import {Spring, animated } from 'react-spring'
import OwlCarousel from 'react-owl-carousel' // lỗi tên thư viện  Using UNSAFE_componentWillReceiveProps
import '../../Assets/OwlCarousel/owl.carousel.css'
import '../../Assets/OwlCarousel/owl.theme.default.css'


export class Footer extends Component {


    render() {
        const settings = {
            dots: false,
            items: 11,
            autoplay: true,
            loop: true,
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 4,
                },
                576: {
                    items: 6,
                },
                768: {
                    items: 7,
                },
                850: {
                    items: 8,
                },
                992: {
                    items: 11,
                },
            }
        }
        return (
            <ContainerFluid className=" movie__footer">
                <Container className="container-md container-fluid"> 
                    <div className="container-fluid">
                    <div className="row p-md-5 py-5 text-center" styled={{marginLeft:0,marginRight:0}}>
                        <div className="col-6">
                            <h6>TIMETIME</h6>
                            <div className="row">
                                <div className="col-sm-6">
                                    <NavLinks to="/noidung/faq" ><p href="#timetime">FAQ</p></NavLinks>
                                    <NavLinks to="/brand"> <p>Brand Guidelines</p></NavLinks>
                                </div>
                                <div className="col-sm-6">
                                    <NavLinks to="/noidung/thoathuan"><p>Thỏa thuận sử dụng</p></NavLinks>
                                    <NavLinks to="/noidung/baomat"> <p>Chính sách bảo mật</p></NavLinks>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6>MOBILE</h6>
                                    <Link target="_blank" rel="noreferrer" href="https://apps.apple.com/"><i className="fab fa-apple"></i></Link>
                                    <Link target="_blank" rel="noreferrer" href="https://play.google.com/"><i className="fab fa-android"></i></Link>
                                </div>
                                <div className="col-sm-6">
                                    <h6>SOCIAL</h6>
                                    <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></Link>
                                    <Link target="_blank" rel="noreferrer" href="https://chat.zalo.me"><i className="fab fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <OwlCarousel className="row owl-theme" {...settings}>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/bhd.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/123go.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cgv.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cinemax.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/cinestar.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/dcine.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/dongda.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/galaxy.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/lotte.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/megags.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/payoo.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/starlight.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/touch.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/agribank.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/vietcombank.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/vietinbank.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/laban.jpg" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/zalopay.png" /></a>
                                </div>
                                <div className="item">
                                    <a href="/" className=""><ImgLarge src="/Assets/img/icons/innovinabank.png" /></a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    </div>
                   <div className="container-fluid">
                   <div className="row">
                        <div className="col-4 col-md-3 text-center">
                            <ImgLeft className="px-2" src="/Assets/img/logo/logo-removebg.png" alt="zion" />

                        </div>
                        <div className="col-md-9 col-8">
                            <h6>TiTa – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN TITA</h6>
                            <p>Địa chỉ: Số 69 Đường Võ Văn Vân, Phường Tân Tạo, Quận Bình Tân, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 012456789,</p>
                            <p>đăng ký thay đổi lần thứ 6969, năm 2069 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1969 6996</p>
                            <p>Email: <span><a href="https://www.google.com">support@tita.vn</a></span></p>
                        </div>
                    </div>
                   </div>
                </Container>
                <div className="container"></div>

            </ContainerFluid>

        )
    }
}

export default Footer
