import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ThongTinPhim extends Component {


    handleDay = (string) => {
        return string ? string.slice(0, 10) : ''
    }
    render() {
        const phim = this.props.phim
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            Ngày công chiếu
                        </div>
                        <div className="col-md-6">
                            {this.handleDay(phim.ngayKhoiChieu)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            Đạo diễn
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            Diễn viên
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            Thể loại
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            Định dạng
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            Quốc gia
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
                <div className="col-md-6 pt-md-0 pt-5">
                    <div>
                        Nội dung
                    </div>
                    <div>
                        {phim.moTa}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default connect(null) (ThongTinPhim)