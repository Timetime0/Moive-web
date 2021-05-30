import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Modal from 'react-bootstrap/Modal'
import { DivBgBehind, DivImgFrame, DivPosition, SpanLeft, SpanRight, I, DivPositionHeader, DivRowHeader, DivRowFooter, DivDetail, DivLeftAim, DivRightAim, DivFrame, DivCarouselCaption, Content, DivModal, Iframe, ButtonIframe, DivRight } from '../../StyledComponent/Carousel/DivPosition.js'
import { Img, ImgBehind } from '../../StyledComponent/Carousel/Img.js'
import { ButtonImg, LinkPlay, LinkClick, LiCarosel } from '../../StyledComponent/Carousel/Link.js'
import { P } from '../../StyledComponent/Container/Header.js'


class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phim: ""
        }
    }

    rendelModel = (movie) => {
        const movieNew = movie.replace('watch?v=', 'embed/')
        this.setState({
            phim: movieNew
        })
    }



    renderCarousel = () => {
        return this.props.danhSachNewPhim.map((movie, index) => {
            return (
                <div>
                    <DivFrame key={index} className="bgBehind" style={{ position: 'relative' }}>
                        <DivBgBehind className="carousel__img">
                            <ImgBehind src={movie.hinhAnh} className="d-block w-100" alt="lat-mat" />
                        </DivBgBehind>
                        <DivPosition className="carousel__content">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-md-4 carousel__left" >
                                        <DivCarouselCaption className="carousel__img-inner carousel-caption">
                                            <DivImgFrame>
                                                <Img src={movie.hinhAnhDung} className="d-block" alt="lat-mat" />
                                            </DivImgFrame>
                                            <DivPositionHeader>
                                                <div className="carousel__header ">
                                                    <DivRowHeader className="row">
                                                        <DivLeftAim className="col-6 p-0 divLeftAim">
                                                            <SpanLeft bgColor="#f36522">{movie.phatHanh}</SpanLeft>
                                                        </DivLeftAim>
                                                        <div className="col-6 p-0 ">
                                                            <SpanRight bgColor="transparent" className=" text-right"><I className="fa fa-star"></I>{movie.danhGia}/10</SpanRight>

                                                        </div>
                                                    </DivRowHeader>
                                                </div>
                                                <div className="m-5">
                                                    <LinkPlay onClick={() => this.rendelModel(movie.trailer)} data-toggle="modal" data-target="#exampleModalLong" className="carousel__play"><i className="fa fa-play"></i></LinkPlay>
                                                </div>
                                                <DivDetail className="carousel__detail text-left">
                                                    <h5>{movie.tenPhim}</h5>
                                                    <P>{movie.thongtincoban}</P>

                                                </DivDetail>
                                                <div className="carousel__footer">
                                                    <DivRowFooter className="row" >
                                                        <div className="col-6">
                                                            <SpanLeft as="a" href="">Detail</SpanLeft>
                                                        </div>
                                                        <DivRightAim className="col-6 divRightAim">
                                                            <SpanRight as="a" className="text-right">15k view</SpanRight>
                                                        </DivRightAim>
                                                    </DivRowFooter>
                                                </div>
                                            </DivPositionHeader>
                                        </DivCarouselCaption>
                                    </div>
                                    <DivRight className="col-md-8 carouse__right">
                                        <div className="carousel-caption d-none d-md-block">
                                            <h2>{movie.tenPhim}</h2>
                                            <Content>{movie.moTa}</Content>
                                            <P>{movie.Loại}</P>
                                            <h6>Ngày phát hành: {movie.phatHanh}</h6>
                                            <ButtonImg >Xem chi tiết</ButtonImg>
                                        </div>
                                    </DivRight>
                                </div>
                            </div>
                        </DivPosition>
                    </DivFrame>
                </div>

            )
        })
    }

    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <LiCarosel data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <LiCarosel data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <LiCarosel data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {this.renderCarousel()[0]}
                        </div>
                        <div className="carousel-item">
                            {this.renderCarousel()[1]}

                        </div>
                        <div className="carousel-item">
                            {this.renderCarousel()[2]}
                        </div>
                    </div>
                    <LinkClick className="carousel-control-prev" style={{ zIndex: 5 }} href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                        <span className="sr-only">Previous</span>
                    </LinkClick>
                    <LinkClick className="carousel-control-next" style={{ zIndex: 5 }} href="#carouselExampleCaptions" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                        <span className="sr-only">Next</span>
                    </LinkClick>
                </div>
                <div>
                    <div className="modal fade bd-example-modal-lg" id="exampleModalLong" tabIndex={0} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                        <DivModal className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div >
                                    <ButtonIframe type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </ButtonIframe>
                                    <Iframe width="898" height="530" src={this.state.phim} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
                                </div>
                            </div>
                        </DivModal>
                    </div>
                </div>
            </div>
        )
    }



    componentDidUpdate(prevProps, prevState) {
        if (prevState.phim !== this.state.phim) {

        }
    }
}


const mapStateToProps = state => {
    return {
        danhSachNewPhim: state.arrNewPhimReducer.danhSachNewPhim,
    }
}


export default connect(mapStateToProps)(Carousel)
