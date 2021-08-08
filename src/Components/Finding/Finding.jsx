import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DELETE_DATA_LICHCHIEU_MAPHIM,
  GET_DATA_LICHCHIEU_MAPHIM_SAGA_FIND,
} from "../../Redux/Types/dataRapPhim";
import {
  DivSeacchPhim,
  DivDetailSearch,
  DivFramSearch,
  Input,
  ButtonClose,
  ButtonSubmit,
  DivDisplay,
} from "../../StyledComponent/Finding/Finding";
import Format from "date-format";
import Swal from "sweetalert2";
import { withRouter } from "react-router";

class Finding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phim: {
        data: "",
        text: "",
        showTable: false,
        maPhim: "",
      },
      cumRap: {
        data: "",
        text: "",
        showTable: false,
        maRapChieu: "",
      },
      tenRap: {
        data: "",
        text: "",
        showTable: false,
        rap: "",
      },
      ngayChieu: {
        data: "",
        text: "",
        showTable: false,
        ngayChieu: "",
        rap: "",
      },
      suatChieu: {
        data: "",
        text: "",
        showTable: false,
        maLichChieu: "",
      },
    };
  }
  myRef = React.createRef();
  myRefCumRap = React.createRef();

  // Ten Phim-----------------------------------------------------------------------------------------
  onMouseInsideTenPhim = () => {
    this.setState({
      phim: { ...this.state.phim, showTable: true },
    });
  };

  onChangInput = (e) => {
    const { value } = e.target;
    if (value === "" || value.length === 0) {
      this.setState({
        phim: { ...this.state.phim, text: value },
      });
      this.props.dispatch({
        type: DELETE_DATA_LICHCHIEU_MAPHIM,
      });
    } else {
      this.setState(
        {
          phim: { ...this.state.phim, text: value },
        },
        () => {
          this.globalSearchForPhim();
        }
      );
    }
  };

  globalSearchForPhim = () => {
    const { text } = this.state.phim;
    const newStr = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .join("-");

    let filteredData = this.props.danhSach.filter((value) => {
      return value.biDanh.includes(newStr);
    });
    this.setState({
      phim: { ...this.state.phim, data: filteredData },
    });
  };

  renderDataSearch = () => {
    const { data, text } = this.state.phim;
    const danhSach = this.props.danhSach;
    if (danhSach) {
      if (text) {
        if (data) {
          return data?.map((item, index) => {
            return (
              <DivDetailSearch
                className="tenPhim"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFinding(event, item.maPhim)
                }
              >
                {item.tenPhim}
              </DivDetailSearch>
            );
          });
        }
      } else {
        return danhSach?.map((item, index) => {
          return (
            <DivDetailSearch
              className="tenPhim"
              key={index}
              onClick={(event) => this.onClickDetailFinding(event, item.maPhim)}
            >
              {item.tenPhim}
            </DivDetailSearch>
          );
        });
      }
    }
  };

  onClickDetailFinding = (event, maPhim) => {
    this.setState({
      phim: {
        ...this.state.phim,
        text: event.target.innerHTML,
        maPhim: maPhim,
      },
    });

    this.props.dispatch({
      type: GET_DATA_LICHCHIEU_MAPHIM_SAGA_FIND,
      maPhim: maPhim,
    });
  };

  handleOnClickDelete = () => {
    this.setState({
      phim: { ...this.state.phim, text: "" },
      cumRap: { ...this.state.cumRap, text: "", maRapChieu: "" },
      tenRap: { ...this.state.tenRap, text: "", rap: "" },
      ngayChieu: { ...this.state.ngayChieu, text: "", rap: "" },
      suatChieu: { ...this.state.suatChieu, text: "" },
    });
    this.props.dispatch({
      type: DELETE_DATA_LICHCHIEU_MAPHIM,
    });
  };

  // Cum Rap-----------------------------------------------------------------------------------------

  onMouseInsideCumRap = (e) => {
    this.setState({
      cumRap: { ...this.state.cumRap, showTable: true },
    });
  };

  onChangInputCumRap = (e) => {
    const { value } = e.target;
    if (value === "" || value.length === 0) {
      this.setState({
        cumRap: { ...this.state.cumRap, text: value },
      });
    } else {
      this.setState(
        {
          cumRap: { ...this.state.cumRap, text: value },
        },
        () => {
          this.globalSearchForCumRap();
        }
      );
    }
  };

  globalSearchForCumRap = () => {
    const { text } = this.state.cumRap;
    const newStr = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .join("-");

    const dataByMaPhim = this.props.dataByMaPhim.heThongRapChieu;
    console.log(dataByMaPhim);
    let filteredData = dataByMaPhim?.filter((value) => {
      const newValue = value.maHeThongRap.toLowerCase();
      console.log(newValue);
      return newValue.includes(newStr);
    });
    this.setState({
      cumRap: { ...this.state.cumRap, data: filteredData },
    });
  };

  renderDataCumRap = () => {
    const dataDefault = this.props.dataByMaPhim.heThongRapChieu;
    const dataFinding = this.state.cumRap.data;
    const text = this.state.cumRap.text;
    if (dataDefault) {
      if (text) {
        if (dataFinding) {
          return dataFinding?.map((item, index) => {
            return (
              <DivDetailSearch
                className="cumRap"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFindingCumRap(event, item)
                }
              >
                {item.maHeThongRap}
              </DivDetailSearch>
            );
          });
        }
      } else {
        if (dataDefault) {
          return dataDefault?.map((item, index) => {
            return (
              <DivDetailSearch
                className="cumRap"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFindingCumRap(event, item)
                }
              >
                {item.maHeThongRap}
              </DivDetailSearch>
            );
          });
        }
      }
    } else {
      return (
        <DivDetailSearch
          name="cumRapTable"
          className="cumRap"
          style={{ textAlign: "center" }}
        >
          Vui lòng chọn phim
        </DivDetailSearch>
      );
    }
  };

  onClickDetailFindingCumRap = (event, item) => {
    this.setState({
      cumRap: {
        ...this.state.cumRap,
        text: event.target.innerHTML,
        maRapChieu: item,
      },
    });
  };

  handleOnClickDeleteCumRap = () => {
    this.setState({
      cumRap: { ...this.state.cumRap, text: "", maRapChieu: "" },
      tenRap: { ...this.state.tenRap, text: "" },
      ngayChieu: { ...this.state.ngayChieu, text: "" },
      suatChieu: { ...this.state.suatChieu, text: "" },
    });
  };

  // Ten Rap
  onMouseInsideTenRap = (e) => {
    this.setState({
      tenRap: { ...this.state.tenRap, showTable: true },
    });
  };

  onChangInputTenRap = (e) => {
    const { value } = e.target;
    if (value === "" || value.length === 0) {
      this.setState({
        tenRap: { ...this.state.tenRap, text: value },
      });
    } else {
      this.setState(
        {
          tenRap: { ...this.state.tenRap, text: value },
        },
        () => {
          this.globalSearchForTenRap();
        }
      );
    }
  };

  globalSearchForTenRap = () => {
    const { text } = this.state.tenRap;
    const newStr = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .join("-");
    const { cumRap } = this.state.cumRap;
    let filteredData = cumRap[0]?.filter((value) => {
      const newValue = value.maCumRap;
      return newValue.includes(newStr);
    });
    this.setState({
      tenRap: { ...this.state.tenRap, data: filteredData },
    });
  };

  renderDataTenRap = () => {
    const { maRapChieu } = this.state.cumRap;
    const dataFinding = this.state.tenRap.data;
    const { text } = this.state.tenRap;
    if (maRapChieu) {
      if (text) {
        if (dataFinding) {
          return dataFinding?.map((item, index) => {
            return (
              <DivDetailSearch
                className="tenRap"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFindingTenRap(event, item)
                }
              >
                {item.tenCumRap}
              </DivDetailSearch>
            );
          });
        }
      } else {
        return maRapChieu.cumRapChieu?.map((item, index) => {
          return (
            <DivDetailSearch
              className="tenRap"
              key={index}
              onClick={(event) => this.onClickDetailFindingTenRap(event, item)}
            >
              {item.tenCumRap}
            </DivDetailSearch>
          );
        });
      }
    } else {
      return (
        <DivDetailSearch className="tenRap" style={{ textAlign: "center" }}>
          Vui lòng chọn phim<br></br>và cụm rạp
        </DivDetailSearch>
      );
    }
  };

  onClickDetailFindingTenRap = (event, rap) => {
    this.setState({
      tenRap: { ...this.state.tenRap, text: event.target.innerHTML, rap: rap },
    });
  };

  handleOnClickDeleteTenRap = () => {
    this.setState({
      tenRap: { ...this.state.tenRap, text: "", rap: "" },
      ngayChieu: { ...this.state.ngayChieu, text: "", rap: "" },
      suatChieu: { ...this.state.suatChieu, text: "" },
    });
  };

  // Ngày chiếu -----------------------------------------------------------
  onMouseInsideNgayChieu = (e) => {
    this.setState({
      ngayChieu: { ...this.state.ngayChieu, showTable: true },
    });
  };

  onChangInputNgayChieu = (e) => {
    const { value } = e.target;
    if (value === "" || value.length === 0) {
      this.setState({
        ngayChieu: { ...this.state.ngayChieu, text: value },
      });
    } else {
      this.setState(
        {
          ngayChieu: { ...this.state.ngayChieu, text: value },
        },
        () => {
          this.globalSearchForNgayChieu();
        }
      );
    }
  };

  globalSearchForNgayChieu = () => {
    const { text } = this.state.ngayChieu;
    const string = text.replace(/[&#/,+()$~%.'":*?<>{}-]/g, "");

    // true thì sẽ lọc ra
    const rap = this.filterSameDay();

    let filteredData = rap?.filter((value) => {
      const newValue = Format("dd MM", new Date(value.ngayChieuGioChieu));
      const str = newValue.replace(/\s/g, ""); //  1001
      return str.includes(string); // trả về mảng 1001
    });

    this.setState({
      ngayChieu: { ...this.state.ngayChieu, data: filteredData },
    });
  };

  filterSameDay = () => {
    const rap = this.state.tenRap.rap;
    const fillterSameDay = rap.lichChieuPhim?.filter((thing, index, self) => {
      const ngayChieu1 = Format(
        "dd/MM/yyyy",
        new Date(thing.ngayChieuGioChieu)
      );

      return (
        index ===
        self.findIndex((t) => {
          const ngayChieu2 = Format(
            "dd/MM/yyyy",
            new Date(t.ngayChieuGioChieu)
          );
          return ngayChieu2 === ngayChieu1;
        })
      );
    });
    return fillterSameDay;
  };

  renderDataNgayChieu = () => {
    const rap = this.filterSameDay();
    const dataFinding = this.state.ngayChieu.data;
    const { text } = this.state.ngayChieu;
    if (rap) {
      if (text) {
        if (dataFinding) {
          return dataFinding?.map((item, index) => {
            return (
              <DivDetailSearch
                className="ngayChieu"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFindingNgayChieu(
                    event,
                    item.ngayChieuGioChieu
                  )
                }
              >
                {Format("dd/MM/yyyy", new Date(item.ngayChieuGioChieu))}
              </DivDetailSearch>
            );
          });
        }
      } else {
        return rap?.map((item, index) => {
          return (
            <DivDetailSearch
              className="ngayChieu"
              key={index}
              onClick={(event) =>
                this.onClickDetailFindingNgayChieu(
                  event,
                  item.ngayChieuGioChieu
                )
              }
              style={{}}
            >
              {Format("dd/MM/yyyy", new Date(item.ngayChieuGioChieu))}
            </DivDetailSearch>
          );
        });
      }
    } else {
      return (
        <DivDetailSearch className="ngayChieu" style={{ textAlign: "center" }}>
          Vui lòng chọn phim, cụm rạp và rạp
        </DivDetailSearch>
      );
    }
  };

  onClickDetailFindingNgayChieu = (event, ngayChieu) => {
    const rap = this.state.tenRap.rap;

    this.setState({
      ngayChieu: {
        ...this.state.ngayChieu,
        text: event.target.innerHTML,
        ngayChieu: ngayChieu,
        rap: rap,
      },
    });
  };

  handleOnClickDeleteNgayChieu = () => {
    this.setState({
      ngayChieu: { ...this.state.ngayChieu, text: "", rap: "" },
      suatChieu: { ...this.state.suatChieu, text: "" },
    });
  };

  //=============================================================== Suất chiếu
  onMouseInsideSuatChieu = (e) => {
    this.setState({
      suatChieu: { ...this.state.suatChieu, showTable: true },
    });
  };

  onChangInputSuatChieu = (e) => {
    const { value } = e.target;
    if (value === "" || value.length === 0) {
      this.setState({
        suatChieu: { ...this.state.suatChieu, text: value },
      });
    } else {
      this.setState(
        {
          suatChieu: { ...this.state.suatChieu, text: value },
        },
        () => {
          this.globalSearchForSuatChieu();
        }
      );
    }
  };

  globalSearchForSuatChieu = () => {
    const { text } = this.state.suatChieu;
    const string = text.replace(/[&/#,+()$~%.'"*?<>{}-]/g, "");
    console.log(string);

    // true thì sẽ lọc ra
    const rap = this.filterSameDaySuatChieu();

    let filteredData = rap?.filter((value) => {
      const newValue = Format("hh:mm", new Date(value.ngayChieuGioChieu));
      const str = newValue.replace(/\s/g, ""); //  1001
      return str.includes(string); // trả về mảng 1001
    });

    this.setState({
      suatChieu: { ...this.state.suatChieu, data: filteredData },
    });
  };

  filterSameDaySuatChieu = () => {
    const rap = this.state.ngayChieu.rap;
    const ngayChieu = this.state.ngayChieu.ngayChieu;
    const value = Format("dd/MM/yyyy", new Date(ngayChieu));
    const fillterSameDay = rap.lichChieuPhim?.filter((thing, index) => {
      return Format("dd/MM/yyyy", new Date(thing.ngayChieuGioChieu)) === value;
    });
    return fillterSameDay;
  };

  renderDataSuatChieu = () => {
    const rap = this.filterSameDaySuatChieu();
    const dataFinding = this.state.suatChieu.data;
    const { text } = this.state.suatChieu;
    if (rap) {
      if (text) {
        if (dataFinding) {
          return dataFinding?.map((item, index) => {
            return (
              <DivDetailSearch
                className="suatChieu"
                key={index}
                onClick={(event) =>
                  this.onClickDetailFindingSuatChieu(event, item.maLichChieu)
                }
              >
                {Format("hh:mm", new Date(item.ngayChieuGioChieu))}
              </DivDetailSearch>
            );
          });
        }
      } else {
        return rap?.map((item, index) => {
          return (
            <DivDetailSearch
              className="suatChieu"
              key={index}
              onClick={(event) =>
                this.onClickDetailFindingSuatChieu(event, item.maLichChieu)
              }
            >
              {Format("hh:mm", new Date(item.ngayChieuGioChieu))}
            </DivDetailSearch>
          );
        });
      }
    } else {
      return (
        <DivDetailSearch className="suatChieu" style={{ textAlign: "center" }}>
          Vui lòng chọn phim, cụm rạp, rạp <br></br>và ngày chiếu
        </DivDetailSearch>
      );
    }
  };

  onClickDetailFindingSuatChieu = (event, maLichChieu) => {
    this.setState({
      suatChieu: {
        ...this.state.suatChieu,
        text: event.target.innerHTML,
        maLichChieu: maLichChieu,
      },
    });
  };

  handleOnClickDeleteSuatChieu = () => {
    this.setState({
      suatChieu: { ...this.state.suatChieu, text: "" },
    });
  };

  render() {
    return (
      <DivDisplay className="container pt-5">
        <div className="row">
          <form className="input-group" onSubmit={this.handleOnSubmit}>
            <DivFramSearch className="col-2">
              <div className="input-group mb-2">
                <Input
                  onChange={this.onChangInput}
                  onClick={this.onMouseInsideTenPhim}
                  type="text"
                  className="form-control tenPhim"
                  value={this.state.phim.text}
                  placeholder="Tên phim"
                  name="phim"
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <ButtonClose
                    type="button"
                    onClick={this.handleOnClickDelete}
                    className="input-group-text"
                  >
                    X
                  </ButtonClose>
                </div>
              </div>
              <DivSeacchPhim>
                {this.state.phim.showTable ? this.renderDataSearch() : ""}
              </DivSeacchPhim>
            </DivFramSearch>
            <DivFramSearch className="col-2">
              <div className="input-group mb-2">
                <Input
                  onClick={this.onMouseInsideCumRap}
                  onChange={this.onChangInputCumRap}
                  type="text"
                  className="form-control cumRap"
                  value={this.state.cumRap.text}
                  placeholder="Cụm Rạp"
                  name="cumRap"
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <ButtonClose
                    type="button"
                    onClick={this.handleOnClickDeleteCumRap}
                    className="input-group-text"
                  >
                    X
                  </ButtonClose>
                </div>
              </div>
              <DivSeacchPhim name="cumRapTable" ref={this.myRef}>
                {this.state.cumRap.showTable ? this.renderDataCumRap() : ""}
              </DivSeacchPhim>
            </DivFramSearch>
            <DivFramSearch className="col-2">
              <div className="input-group mb-2">
                <Input
                  onClick={this.onMouseInsideTenRap}
                  onChange={this.onChangInputTenRap}
                  type="text"
                  className="form-control tenRap"
                  value={this.state.tenRap.text}
                  placeholder="Tên Rạp"
                  name="tenRap"
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <ButtonClose
                    type="button"
                    onClick={this.handleOnClickDeleteTenRap}
                    className="input-group-text"
                  >
                    X
                  </ButtonClose>
                </div>
              </div>
              <DivSeacchPhim>
                {this.state.tenRap.showTable ? this.renderDataTenRap() : ""}
              </DivSeacchPhim>
            </DivFramSearch>
            <DivFramSearch className="col-2">
              <div className="input-group mb-2">
                <Input
                  onClick={this.onMouseInsideNgayChieu}
                  onChange={this.onChangInputNgayChieu}
                  type="text"
                  className="form-control ngayChieu"
                  value={this.state.ngayChieu.text}
                  placeholder="Ngày chiếu"
                  name="tenRap "
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <ButtonClose
                    type="button"
                    onClick={this.handleOnClickDeleteNgayChieu}
                    className="input-group-text"
                  >
                    X
                  </ButtonClose>
                </div>
              </div>
              <DivSeacchPhim>
                {this.state.ngayChieu.showTable
                  ? this.renderDataNgayChieu()
                  : ""}
              </DivSeacchPhim>
            </DivFramSearch>
            <DivFramSearch className="col-2">
              <div className="input-group mb-2">
                <Input
                  onClick={this.onMouseInsideSuatChieu}
                  onChange={this.onChangInputSuatChieu}
                  type="text"
                  className="form-control suatChieu"
                  value={this.state.suatChieu.text}
                  placeholder="Suất chiếu"
                  name="tenRap "
                  autoComplete="off"
                />
                <div className="input-group-prepend">
                  <ButtonClose
                    type="button"
                    onClick={this.handleOnClickDeleteSuatChieu}
                    className="input-group-text"
                  >
                    X
                  </ButtonClose>
                </div>
              </div>
              <DivSeacchPhim>
                {this.state.suatChieu.showTable
                  ? this.renderDataSuatChieu()
                  : ""}
              </DivSeacchPhim>
            </DivFramSearch>
            <DivFramSearch className="col-2">
              <ButtonSubmit type="submit" className="btn btn-success">
                Đặt vé
              </ButtonSubmit>
            </DivFramSearch>
          </form>
        </div>
      </DivDisplay>
    );
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutsideTenPhim);
    document.addEventListener("mousedown", this.handleClickOutsideCumRap);
    document.addEventListener("mousedown", this.handleClickOutsideTenRap);
    document.addEventListener("mousedown", this.handleClickOutsideNgayChieu);
    document.addEventListener("mousedown", this.handleClickOutsideSuatChieu);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideTenPhim);
    document.removeEventListener("mousedown", this.handleClickOutsideCumRap);
    document.removeEventListener("mousedown", this.handleClickOutsideTenRap);
    document.removeEventListener("mousedown", this.handleClickOutsideNgayChieu);
    document.removeEventListener("mousedown", this.handleClickOutsideSuatChieu);
  }

  handleClickOutsideTenPhim = (e) => {
    const { className } = e.target;
    let reg = new RegExp(`\\btenPhim\\b`);
    const value = className.search(reg);
    if (value !== -1) {
      this.setState({
        phim: { ...this.state.phim, showTable: true },
      });
    } else {
      if (!this.myRef.current.contains(e.target)) {
        this.setState({
          phim: { ...this.state.phim, showTable: false },
        });
      }
    }
  };

  handleClickOutsideCumRap = (e) => {
    const { className } = e.target;
    let reg = new RegExp(`\\bcumRap\\b`);
    const value = className.search(reg);
    if (value !== -1) {
      this.setState({
        cumRap: { ...this.state.cumRap, showTable: true },
      });
    } else {
      if (!this.myRef.current.contains(e.target)) {
        this.setState({
          cumRap: { ...this.state.cumRap, showTable: false },
        });
      }
    }
  };

  handleClickOutsideTenRap = (e) => {
    const { className } = e.target;
    let reg = new RegExp(`\\btenRap\\b`);
    const value = className.search(reg);
    if (value !== -1) {
      this.setState({
        tenRap: { ...this.state.tenRap, showTable: true },
      });
    } else {
      if (!this.myRef.current.contains(e.target)) {
        this.setState({
          tenRap: { ...this.state.tenRap, showTable: false },
        });
      }
    }
  };

  handleClickOutsideNgayChieu = (e) => {
    const { className } = e.target;
    let reg = new RegExp(`\\bngayChieu\\b`);
    const value = className.search(reg);
    if (value !== -1) {
      this.setState({
        ngayChieu: { ...this.state.ngayChieu, showTable: true },
      });
    } else {
      if (!this.myRef.current.contains(e.target)) {
        this.setState({
          ngayChieu: { ...this.state.ngayChieu, showTable: false },
        });
      }
    }
  };

  handleClickOutsideSuatChieu = (e) => {
    const { className } = e.target;
    let reg = new RegExp(`\\bsuatChieu\\b`);
    const value = className.search(reg);
    if (value !== -1) {
      this.setState({
        suatChieu: { ...this.state.suatChieu, showTable: true },
      });
    } else {
      if (!this.myRef.current.contains(e.target)) {
        this.setState({
          suatChieu: { ...this.state.suatChieu, showTable: false },
        });
      }
    }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.suatChieu.maLichChieu) {
      const client = localStorage.getItem("client");
      if (client) {
        localStorage.setItem("maPhim", this.state.phim.maPhim);
        this.props.history.push(`booking/${this.state.suatChieu.maLichChieu}`);
      } else {
        Swal.fire({
          title: "Bạn chưa đăng nhập",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f36522 ",
          cancelButtonColor: "#d33",
          confirmButtonText: "Đi đến trang đăng nhập",
          cancelButtonText: "Không",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push("/login");
          }
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Lỗi chọn phim",
      });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    danhSach: state.arrDataPhimReducer.arrData,
    dataByMaPhim: state.arrDataRapPhimReducer.dataByMaPhim,
  };
};

export default connect(mapStateToProps)(withRouter(Finding));
