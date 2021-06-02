import { connect } from 'react-redux'
import React, { Component } from 'react'
import { BtnDg, DivFrameComment, DivRow, ImgAvt, Text } from '../../StyledComponent/ChiTietPhim/danhGia'
import { withRouter } from "react-router";
import { ADD_COMMENTS } from '../../Redux/Types/DanhGiaType';
import Swal from 'sweetalert2'
import Format from 'date-format'

class DanhGia extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 1,
            comments:{
                taiKhoan:'',
                noiDung:'',
                ngayThang:'',
            },
        }
    }


    renderComment = () => {
        const { danhGia } = this.props
        const maPhim = this.props.match.params.maPhim
        if (danhGia) {
            const danhGiaByPhim = danhGia.filter((item) => item.maPhim === +maPhim)
            if(danhGiaByPhim.length !==0){
                return danhGiaByPhim[0].comments?.map((item, index) => {
                    return <DivRow className="row pt-3" key={index}>
                        <div className="col-2 text-center">
                            <ImgAvt src={`https://i.pravatar.cc/150?u=fake@${item.taiKhoan}`} alt="true" />
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <p className="col-6">{item.taiKhoan}</p>
                                <p className="col-6 text-right">{Format('hh:mm - dd/MM/yyyy', new Date(item.ngayThang))}</p>
                                <DivFrameComment className="col-12">{item.noiDung}</DivFrameComment>
                            </div>
                        </div>
                    </DivRow>
                })
            }         
        }else{
            return <div></div>
        }
    }


    handleOnChange =(e)=>{
        const {name,value} = e.target
        this.setState({
            comments:{...this.state.comments,[name]:value}
        })
    }

    handleOnSubmit = ()=>{
        const user =(localStorage.getItem('client'))

        if(user){
            const {noiDung} = this.state.comments
            if(noiDung){
                const client = JSON.parse(localStorage.getItem('client'))
                const day = new Date()
                console.log(day)
                this.setState({
                    comments:{
                        ...this.state.comments,
                        taiKhoan: client.taiKhoan,
                        ngayThang: day
                    }
                })
                this.props.dispatch({
                    type:ADD_COMMENTS,
                    maPhim: this.props.match.params.maPhim,
                    object:this.state.comments,
                })
            }
        }else{
            Swal.fire({
                title: 'Bạn chưa đăng nhập',
                text: "Đi đến trang đăng nhập",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#f36522 ',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý',
                cancelButtonText: 'Không',
              }).then((result) => {
                if (result.isConfirmed) {
                    this.props.history.push('/login')
                }
              })
        }
       
    }

    render() {
        return (
            <div className="container">
                <div className="comments">
                    <p>({this.state.number}) Bình luận</p>
                    <DivRow className="row">
                        <div className="col-2 text-center">
                            <ImgAvt src="https://i.pravatar.cc/150?u=fake@Admin" alt="true" />
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <p className="col-6">Admin</p>
                                <p className="col-6 text-right">02:08 - 02/06/2021</p>
                                <DivFrameComment className="col-12">I love you phặc phặc</DivFrameComment>
                            </div>
                        </div>
                    </DivRow>
                    {this.renderComment()}
                </div>

                <div className="commentsOfyour text-center pt-5">
                    <div className="form-group">
                        <Text className="form-input" name="noiDung" required="" placeholder="Your text" onChange={this.handleOnChange}></Text>
                    </div>
                    <BtnDg onClick={this.handleOnSubmit} className="btn btn-success">Gởi</BtnDg>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const { danhGia } = this.props
        const maPhim = this.props.match.params.maPhim
        if (danhGia) {
            const danhGiaByPhim = danhGia.filter((item) => item.maPhim === +maPhim)
            if(danhGiaByPhim.length!==0){
                this.setState({
                    number: 1 + danhGiaByPhim[0].comments.length
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){


    }

}

const mapStateToProps = (state) => {
    return {
        danhGia: state.arrDanhGia.danhGia
    }
}

export default connect(mapStateToProps)(withRouter(DanhGia))