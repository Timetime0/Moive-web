import React, { Component ,PropTypes } from 'react'
import { connect } from 'react-redux'
import { DELETE_DATA_LICHCHIEU_MAPHIM, GET_DATA_LICHCHIEU_MAPHIM_SAGA } from '../../Redux/Types/dataRapPhim'
import { DivSeacchPhim, DivDetailSearch, DivFramSearch } from '../../StyledComponent/Finding/Finding'
import $ from 'jquery'

class Finding extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phim: {
                data: '',
                text: '',
                showTable: false,
                maPhim: '',
            },
            cumRap: {
                data: '',
                text: '',
                showTable: false,
                maCumRap:'',
            },
            tenRap:{
                data: '',
                text: '',
                showTable: false,
            },
            ngayChieu:{

            },
            suatChieu:{

            },
        }
    }


    // Ten Phim

    onChangInput = (e) => {
        const { name, value } = e.target
        if (value === "" || value.length === 0) {
            this.setState({
                phim: { ...this.state.phim, showTable: false, text: value }
            })
            this.props.dispatch({
                type:DELETE_DATA_LICHCHIEU_MAPHIM
            })
        } else {
            this.setState({
                phim: { ...this.state.phim, showTable: true, text: value }
            },
                () => { this.globalSearchForPhim() }
            )
        }
    }

    globalSearchForPhim = () => {
        const { text } = this.state.phim;
        const newStr = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, ' ').split(" ").join("-");

        let filteredData = this.props.danhSach.filter(value => {
            return (
                value.biDanh.includes(newStr)
            )
        })
        this.setState({
            phim: { ...this.state.phim, data: filteredData }
        })
    }

    renderDataSearch = () => {
        const { data } = this.state.phim
        if (data) {
            {
                return data?.map((item, index) => {
                    return <DivDetailSearch key={index} onClick={(event) => this.onClickDetailFinding(event, item.maPhim)}>{item.tenPhim}</DivDetailSearch>
                })
            }
        }
    }


    onClickDetailFinding = (event, maPhim) => {
        this.setState({
            phim: { ...this.state.phim, text: event.target.innerHTML, showTable: false, maPhim: maPhim }
        })
        this.props.dispatch({
            type: GET_DATA_LICHCHIEU_MAPHIM_SAGA,
            maPhim: maPhim
        })
    }

    handleOnClickDelete = () => {
        this.setState({
            phim: { ...this.state.phim, text: '' }
        })
        this.props.dispatch({
            type:DELETE_DATA_LICHCHIEU_MAPHIM
        })
    }



    // Cum Rap
    myRef = React.createRef();
    myRefCumRap = React.createRef();
    onMouseInsideCumRap = (e) => {
        this.setState({
            cumRap: { ...this.state.cumRap, showTable: true}
        })
    }

    onChangInputCumRap = (e) => {
        const { value } = e.target
        if (value === "" || value.length === 0) {
            this.setState({
                cumRap: { ...this.state.cumRap, text: value }
            })
        } else {
            this.setState({
                cumRap: { ...this.state.cumRap, text: value }
            },
                () => { this.globalSearchForCumRap() }
            )
        }
    }

    globalSearchForCumRap=()=>{
        const { text } = this.state.cumRap;
        const newStr = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, ' ').split(" ").join("-");

        console.log(newStr)
        const dataByMaPhim = this.props.dataByMaPhim.heThongRapChieu
        let filteredData = dataByMaPhim?.filter(value => {
            const newValue = value.maHeThongRap.toLowerCase()
            console.log(newValue)
            return (
                newValue.includes(newStr)
            )
        })
        this.setState({
            cumRap: { ...this.state.cumRap, data: filteredData }
        })
    }

    renderDataCumRap = () => {
        const  dataDefault  = this.props.dataByMaPhim?.heThongRapChieu
        const dataFinding = this.state.cumRap.data
        const {text} =this.state.cumRap

         if (dataDefault) {
            if(text){
                if(dataFinding){
                    return dataFinding?.map((item, index) => {
                        return <DivDetailSearch className="cumRap" name="cumRapTable" key={index} onClick={(event) => this.onClickDetailFindingCumRap(event, item.maHeThongRap)}>{item.maHeThongRap}</DivDetailSearch>
                    })
                }
            }else{
                return dataDefault?.map((item, index) => {
                    return <DivDetailSearch key={index} onClick={(event) => this.onClickDetailFindingCumRap(event, item.maHeThongRap)}>{item.maHeThongRap}</DivDetailSearch>
                })
            }
         } else {
             return <DivDetailSearch name="cumRapTable" className="cumRap">Vui lòng chọn phim</DivDetailSearch>
         }
    }

    onClickDetailFindingCumRap = (event, maHeThongRap)=>{
        this.setState({
            cumRap: { ...this.state.cumRap, text: event.target.innerHTML, maCumRap:maHeThongRap }
        })
    }

    handleOnClickDeleteCumRap = ()=>{
        this.setState({
            cumRap: { ...this.state.cumRap, text: '' }
        })
    }


    // Ten Rap
    onMouseInsideTenRap = (e) => {
        this.setState({
            tenRap: { ...this.state.tenRap, showTable: true}
        })
    }

    onChangInputTenRap = (e) => {
        const { value } = e.target
        if (value === "" || value.length === 0) {
            this.setState({
                tenRap: { ...this.state.tenRap, text: value }
            })
        } else {
            this.setState({
                tenRap: { ...this.state.tenRap, text: value }
            },
                () => { this.globalSearchForTenRap() }
            )
        }
    }

    globalSearchForTenRap=()=>{
        const { text } = this.state.tenRap;
        const newStr = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, ' ').split(" ").join("-");
        const dataByMaPhim = this.dataDefault()
        let filteredData = dataByMaPhim?.filter(value => {
            const newValue = value.maCumRap
            return (
                newValue.includes(newStr)
            )
        })
        this.setState({
            tenRap: { ...this.state.tenRap, data: filteredData }
        })
    }

    dataDefault = ()=>{
        const cumRap = this.state.cumRap.maCumRap
        const dataByMaPhim = this.props.dataByMaPhim.heThongRapChieu?.filter(item=>{
            return item.maHeThongRap === cumRap
        })
        return dataByMaPhim
    }

    renderDataTenRap = () => {
        const  dataDefault  = this.dataDefault()
        const dataFinding = this.state.tenRap.data
        const {text} =this.state.tenRap

         if (dataDefault) {
            if(text){
                if(dataFinding){
                    return dataFinding?.map((item, index) => {
                        return <DivDetailSearch className="tenRap" key={index} onClick={(event) => this.onClickDetailFindingTenRap(event, item.tenCumRap)}>{item.tenCumRap}</DivDetailSearch>
                    })
                }
            }else{
                return dataDefault?.map((item, index) => {
                    return <DivDetailSearch className="tenRap" key={index} onClick={(event) => this.onClickDetailFindingTenRap(event, item.tenCumRap)}>{item.tenCumRap}</DivDetailSearch>
                })
            }
         } else {
             return <DivDetailSearch className="tenRap">Vui lòng chọn và cụm rạp</DivDetailSearch>
         }
    }

    onClickDetailFindingTenRap = (event, tenCumRap)=>{
        this.setState({
            tenRap: { ...this.state.tenRap, text: event.target.innerHTML}
        })
    }

    handleOnClickDeleteTenRap = ()=>{
        this.setState({
            tenRap: { ...this.state.tenRap, text: '' }
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="input-group" onSubmit={this.handleOnSubmit}>

                        <DivFramSearch className="col-2">
                            <div className="input-group mb-2">
                                <input
                                    onChange={this.onChangInput}
                                    type="text" className='form-control' value={this.state.phim.text} placeholder='Tên phim' name="phim" autoComplete="off" />
                                <div className="input-group-prepend" >
                                    <div onClick={this.handleOnClickDelete} className="input-group-text">X</div>
                                </div>
                            </div>
                            <DivSeacchPhim>
                                {this.state.phim.showTable ? this.renderDataSearch() : ""}
                            </DivSeacchPhim>
                        </DivFramSearch>
                        <DivFramSearch className="col-2">
                            <div className="input-group mb-2">
                                <input
                                    onClick={this.onMouseInsideCumRap}
                                    onChange={this.onChangInputCumRap}
                                    type="text" className='form-control' value={this.state.cumRap.text} 
                                   
                                    placeholder='Cụm Rạp' name="cumRap" autoComplete="off" />
                                <div className="input-group-prepend" >
                                    <div onClick={this.handleOnClickDeleteCumRap} className="input-group-text">X</div>
                                </div>
                            </div>
                            <DivSeacchPhim name="cumRapTable"  ref={this.myRef}>
                                {this.state.cumRap.showTable ? this.renderDataCumRap() : ""}
                            </DivSeacchPhim>
                        </DivFramSearch>
                        <DivFramSearch className="col-2">
                        <div className="input-group mb-2">
                                <input
                                    onClick={this.onMouseInsideTenRap}
                                    onChange={this.onChangInputTenRap}
                                    type="text" className='form-control ' value={this.state.tenRap.text} 
                                    
                                    placeholder='Tên Rạp' name="tenRap" autoComplete="off" />
                                <div className="input-group-prepend" >
                                    <div onClick={this.handleOnClickDeleteTenRap} className="input-group-text">X</div>
                                </div>
                            </div>
                            <DivSeacchPhim>
                                {this.state.tenRap.showTable ? this.renderDataTenRap() : ""}
                            </DivSeacchPhim>

                        </DivFramSearch>
                        <DivFramSearch className="col-2"></DivFramSearch>
                        <DivFramSearch className="col-2"></DivFramSearch>
                        <DivFramSearch className="col-2"></DivFramSearch>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.addEventListener("mousedown", (this.handleClickOutside, this.handleClickOutsideTenRap));
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }

    handleClickOutside = (e)=>{
        if(e.target.className ==="form-control cumRap" ||  e.target.className ==="sc-cGKJhA cNrrCc cumRap"){
            return this.setState({ 
                cumRap: { ...this.state.cumRap, showTable:true }
            });
        }else{
            if (!this.myRef.current.contains(e.target)) {
                this.setState({ 
                    cumRap: { ...this.state.cumRap, showTable:false }
                });
              }
        }
    }

    handleOnSubmit = () => {

    }
}

const mapStateToProps = (state) => {
    return {
        danhSach: state.arrDataPhimReducer.arrData,
        dataByMaPhim: state.arrDataRapPhimReducer.dataByMaPhim
    }
}

export default connect(mapStateToProps)(Finding)

