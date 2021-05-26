import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_IMG_PHIM_SAGA, UPDATE_IMG_PHIM_SAGA } from '../../../Redux/Types/Admin/quanLyPhimType'
import { ButtonThem, DivFrameBtn } from '../../../StyledComponent/Admin/QuanLyNguoiDung/quanLyNguoiDung'
import { BookingContent, FormInput, FormPhimAd, BookingFormPhimAd, ImgFile, DivFile } from '../../../StyledComponent/Login/DangKyStyled'
import $ from 'jquery';

class FormPhim extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            phim: {
                maPhim: '',
                tenPhim: '',
                biDanh: '',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                maNhom: 'GP01',
                ngayKhoiChieu: '',
                danhGia: '',
            },
            nameHinhAnh: '',
            basa64HinhAnh: '',
        }
    }

    onChangeValue = async (e) => {
        const { name, value } = e.target
        console.log(this.state.phim)
        console.log(this.myRef)
        const newTrailer = this.myRef.currentSrc
        let fileReader = new FileReader()
        let response = await fetch(`${this.state.phim.hinhAnh}`);
        console.log(response)

        // let request = new XMLHttpRequest();
        // request.open('GET', this.state.phim.hinhAnh, true);
        // request.responseType = 'blob';
        // request.onload = function () {
        //     var reader = new FileReader();
        //     console.log(reader)
        //     reader.readAsDataURL(request.response);
        //     reader.onload = function (e) {
        //         console.log('DataURL:', e.target.result);
        //     };
        // };
        // request.send();

        if (name === 'trailer') {
            let newTrailer = value.replace('watch?v=', 'embed/')
            this.setState({
                phim: {
                    ...this.state.phim,
                    [name]: newTrailer
                }
            })
        } else {
            this.setState({
                phim: {
                    ...this.state.phim,
                    [name]: value
                }
            })
        }


    }

    handleSubmit = (e) => {
        e.preventDefault()
        const status = this.props.status
        console.log(this.state.phim)
        if (status === "fix") {
            this.props.dispatch({
                type: UPDATE_IMG_PHIM_SAGA,
                phim: this.state.phim
            })
        } else {
            this.props.dispatch({
                type: ADD_IMG_PHIM_SAGA,
                phim: this.state.phim
            })
        }
    }


    getNameImg = (e) => {
        const hinhAnh = e.target.files[0]
        console.log(hinhAnh)
        this.setState({
            nameHinhAnh: hinhAnh.name,
            phim: { ...this.state.phim, hinhAnh: hinhAnh }
        })

        let fileReader = new FileReader();
        fileReader.readAsDataURL(hinhAnh)
        fileReader.onload = async (e) => {
            this.setState({
                basa64HinhAnh: e.target.result,
            })
        };


    }

    render() {
        const status = this.props.status
        return (
            <BookingContent className="booking-content">
                <BookingFormPhimAd className="booking-form ">
                    <FormPhimAd id="booking-form" onSubmit={(event) => this.handleSubmit(event)} >
                        <div className='row'>
                            <h3 className="text-center col-12">{status === "fix" ? 'Cập nhật phim' : 'Thêm phim'}</h3>
                            <FormInput className="form-group form-input col-6">
                                <input onChange={this.onChangeValue} type="text" name="maPhim" id="maPhim" value={this.state.phim.maPhim} required autoComplete='off' />
                                <label htmlFor="maPhim" className="form-label">Mã phim</label>
                            </FormInput>
                            <FormInput className="form-group form-input  col-6">
                                <input onChange={this.onChangeValue} type="text" name="tenPhim" id="tenPhim" value={this.state.phim.tenPhim} required autoComplete='off' />
                                <label htmlFor="tenPhim" className="form-label">Tên Phim</label>
                            </FormInput>

                            <FormInput className="form-group form-input col-6">
                                <input onChange={this.onChangeValue} type="text" name="biDanh" id="biDanh" value={this.state.phim.biDanh} required autoComplete='off' />
                                <label htmlFor="biDanh" className="form-label">Bí Danh</label>
                            </FormInput>

                            <FormInput className="form-group form-input  col-6">
                                <input onChange={this.onChangeValue} type="text" name="trailer" id="trailer" value={this.state.phim.trailer} required autoComplete='off' />
                                <label htmlFor="trailer" className="form-label">Trailer (Đường Link)</label>
                            </FormInput>

                            <FormInput className="form-group form-input displayNone col-6" autofocus="false">
                                <input type="file" name="hinhAnh" id="hinhAnh" required onChange={event => {
                                    this.getNameImg(event)
                                }} style={{ display: 'none' }} />
                                <label htmlFor="hinhAnh" className="form-label">Hình Ảnh (*.jpg, *.png, *.gif!)</label>
                                <DivFile type="button" className="">
                                    <div onClick={() => $('#hinhAnh').click()} className="btn btn-success">Chọn hình ảnh</div>
                                    {/* <PFile>{this.state.nameHinhAnh}</PFile> */}
                                    {this.state.basa64HinhAnh ? <ImgFile ref={this.myRef} src={this.state.basa64HinhAnh} alt="true" /> : ""}
                                </DivFile>

                            </FormInput>

                            <FormInput className="form-group form-input displayNone  col-6" >
                                <input onChange={this.onChangeValue} type="text" name="moTa" id="moTa" value={this.state.phim.moTa} required autoComplete='off' />
                                <label htmlFor="moTa" className="form-label">Mô Tả</label>
                            </FormInput>

                            <FormInput className="form-group form-input displayNone  col-6" >
                                <input onChange={this.onChangeValue} type="text" name="ngayKhoiChieu" id="ngayKhoiChieu" value={this.state.phim.ngayKhoiChieu} required autoComplete='off' />
                                <label htmlFor="ngayKhoiChieu" className="form-label">Ngày Khởi Chiếu (dd/mm/yyyy)</label>
                            </FormInput>

                            <FormInput className="form-group form-input displayNone  col-6" >
                                <input onChange={this.onChangeValue} type="text" name="danhGia" id="danhGia" value={this.state.phim.danhGia} required autoComplete='off' />
                                <label htmlFor="danhGia" className="form-label">Đánh Giá (0 đến 10)</label>
                            </FormInput>

                            <DivFrameBtn className="form-submit text-right mt-4 ">
                                <ButtonThem type="submit" className="submit btn btn-success" id="submit" name="submit">{status === "fix" ? 'Cập nhật' : 'Thêm'}</ButtonThem>
                            </DivFrameBtn>
                        </div>
                    </FormPhimAd>
                </BookingFormPhimAd>
            </BookingContent>

        )
    }
    componentDidUpdate(prevProps) {
        const status = this.props.status
        const phims = this.props.phim
        const arr = []
        arr.push(typeof (phims.hinhAnh))
        const file = new File(arr, phims.hinhAnh?.slice(42), { type: "image/png" })

        if (phims !== prevProps.phim) {
            if (status === "fix") {
                let newTrailer = phims.trailer.replace('watch?v=', 'embed/')

                const newPhim = { ...phims, maNhom: "GP01", trailer: newTrailer }

                this.setState({
                    phim: newPhim,
                    basa64HinhAnh: phims.hinhAnh,
                })

            } else {
                let newPhims = {
                    maPhim: '',
                    tenPhim: '',
                    biDanh: '',
                    trailer: '',
                    hinhAnh: '',
                    moTa: '',
                    maNhom: 'GP01',
                    ngayKhoiChieu: '',
                    danhGia: '',
                }
                this.setState({
                    phim: newPhims,
                    nameHinhAnh: '',
                    basa64HinhAnh: '',
                })
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(null)(FormPhim)