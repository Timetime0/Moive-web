import React, { Component } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { DivBgQuangCao, ImgQuangCao, ImgQuangCao1, DivContainerQuangCao, DivFrameRight, FrameLeft, DivImgInside, DivPositionCarousel, ButtonQuangCao} from '../../StyledComponent/QuangCao/QuangCao'

// import OwlCarousel from 'react-owl-carousel' // lỗi tên thư viện  Using UNSAFE_componentWillReceiveProps
import '../../Assets/OwlCarousel/owl.carousel.css'
import '../../Assets/OwlCarousel/owl.theme.default.css'

class QuangCao extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        };

        return (
            <div id="quangCao" >
                <DivBgQuangCao>
                    <DivContainerQuangCao className="container">
                        <div className="row text-center m-0" >
                            <FrameLeft className="col-md-7">
                                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <ButtonQuangCao className="btn btn-danger py-2 my-2">App miễn phí - Tải về ngay!</ButtonQuangCao>
                                <p>TIX có hai phiên bản <a href="https://www.google.com/">iOS</a> & <a href="https://www.google.com/">Android</a> </p>
                            </FrameLeft>
                            <div className="col-md-5">
                                <DivFrameRight>
                                    <DivImgInside >
                                        <ImgQuangCao src='/Assets/img/QuangCao/mobile.png' alt="true" />
                                        <DivPositionCarousel>
                                            <Slider {...settings}>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide1.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide2.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide3.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide4.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide5.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide6.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide7.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide8.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide11.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide12.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide13.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide14.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide15.jpg" alt="true" />
                                                </div>
                                                <div className="item" >
                                                    <ImgQuangCao1 src="/Assets/img/QuangCao/slide16.jpg" alt="true" />
                                                </div>
                                            </Slider>
                                        </DivPositionCarousel>
                                    </DivImgInside>

                                </DivFrameRight>
                            </div>
                        </div>
                    </DivContainerQuangCao>
                </DivBgQuangCao>
            </div>
        )
    }
}

export default QuangCao
