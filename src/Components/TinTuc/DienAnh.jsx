import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ButtonDienAnh,
  DivChild1,
  DivChild2,
  DivDienAnh,
  DivFrameDienAnh,
  DivFrameDienAnh1,
  H6DienAnh,
  ImgDienAnh,
  ImgDienAnhSmall,
  LinkDienAnh,
  PDienAnh,
} from "../../StyledComponent/TinTuc/DienAnh";

class DienAnh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      breakpoint: 1360,
    };
  }

  handleSetCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  renderDienAnh = () => {
    // tao mang moi chua 8 noi dung can dien
    const arr = [];
    for (let i = 0; i < (this.props.dienAnh.length / 8).toFixed(0); i++) {
      let count = i * 8;
      let count1 = 8 + i * 8;
      const newArr = this.props.dienAnh.slice(count, count1); // manng object
      arr.push(newArr);
    }

    if (this.state.count) {
      const arrFirst = arr.slice(0, this.state.count);
      return arrFirst.map((item, index) => {
        return (
          <div key={index}>
            <div className="row my-5">
              {item[0] ? (
                <div className="1-new col-lg-6 col-4 ">
                  <ImgDienAnh src={item[0].hinhAnh} alt="" />
                  <LinkDienAnh href="/true">
                    {" "}
                    <h6>{item[0].noiDungChinh}</h6>
                  </LinkDienAnh>
                  <PDienAnh>{item[0].noiDungPhu}</PDienAnh>
                </div>
              ) : (
                ""
              )}
              <div className="col-lg-6 col-8">
                <div className="row">
                  {item[1] ? (
                    <div className="2-new col-lg-6 col-6 ">
                      <ImgDienAnh src={item[1].hinhAnh} alt="" />
                      <LinkDienAnh href="">
                        {" "}
                        <h6>{item[1].noiDungChinh}</h6>
                      </LinkDienAnh>
                      <PDienAnh>{item[1].noiDungPhu}</PDienAnh>
                    </div>
                  ) : (
                    ""
                  )}
                  {item[2] ? (
                    <div className="3-new col-lg-6 col-6 ">
                      <ImgDienAnh src={item[2].hinhAnh} alt="" />
                      <LinkDienAnh href="/true">
                        {" "}
                        <h6>{item[2].noiDungChinh}</h6>
                      </LinkDienAnh>
                      <PDienAnh>{item[2].noiDungPhu}</PDienAnh>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="4-new col-lg-5 col-12 tinTuc_child1">
                <DivChild1>
                  {item[4] ? (
                    <DivDienAnh className="col-lg-12">
                      <div className="row">
                        <ImgDienAnhSmall
                          className="col-4"
                          src={item[4].hinhAnh}
                          alt=""
                        />
                        <LinkDienAnh className="col-8" href="/true">
                          {" "}
                          <H6DienAnh>{item[4].noiDungChinh}</H6DienAnh>
                        </LinkDienAnh>
                      </div>
                    </DivDienAnh>
                  ) : (
                    ""
                  )}
                  {item[5] ? (
                    <DivDienAnh className="col-lg-12">
                      <div className="row">
                        <ImgDienAnhSmall
                          className="col-4"
                          src={item[5].hinhAnh}
                          alt=""
                        />
                        <LinkDienAnh className="col-8" href="/true">
                          {" "}
                          <H6DienAnh>{item[5].noiDungChinh}</H6DienAnh>
                        </LinkDienAnh>
                      </div>
                    </DivDienAnh>
                  ) : (
                    ""
                  )}
                  {item[6] ? (
                    <DivDienAnh className="col-lg-12">
                      <div className="row">
                        <ImgDienAnhSmall
                          className="col-4"
                          src={item[6].hinhAnh}
                          alt=""
                        />
                        <LinkDienAnh className="col-8" href="/true">
                          {" "}
                          <H6DienAnh>{item[6].noiDungChinh}</H6DienAnh>
                        </LinkDienAnh>
                      </div>
                    </DivDienAnh>
                  ) : (
                    ""
                  )}
                  {item[7] ? (
                    <DivDienAnh className="col-lg-12">
                      <div className="row">
                        <ImgDienAnhSmall
                          className="col-4"
                          src={item[7].hinhAnh}
                          alt=""
                        />
                        <LinkDienAnh className="col-8" href="/true">
                          {" "}
                          <H6DienAnh>{item[7].noiDungChinh}</H6DienAnh>
                        </LinkDienAnh>
                      </div>
                    </DivDienAnh>
                  ) : (
                    ""
                  )}
                </DivChild1>

                <DivChild2 className="row tinTuc_child2">
                  <div className="row">
                    {item[4] ? (
                      <DivDienAnh className="col-6 my-1">
                        <div className="row">
                          <ImgDienAnhSmall
                            className="col-4"
                            src={item[4].hinhAnh}
                            alt=""
                          />
                          <LinkDienAnh className="col-6" href="/true">
                            {" "}
                            <H6DienAnh>{item[4].noiDungChinh}</H6DienAnh>
                          </LinkDienAnh>
                        </div>
                      </DivDienAnh>
                    ) : (
                      ""
                    )}
                    {item[5] ? (
                      <DivDienAnh className="col-6">
                        <div className="row">
                          <ImgDienAnhSmall
                            className="col-4"
                            src={item[5].hinhAnh}
                            alt=""
                          />
                          <LinkDienAnh className="col-8 " href="/true">
                            {" "}
                            <H6DienAnh>{item[5].noiDungChinh}</H6DienAnh>
                          </LinkDienAnh>
                        </div>
                      </DivDienAnh>
                    ) : (
                      ""
                    )}
                    {item[6] ? (
                      <DivDienAnh className="col-6 ">
                        <div className="row">
                          <ImgDienAnhSmall
                            className="col-4"
                            src={item[6].hinhAnh}
                            alt=""
                          />
                          <LinkDienAnh className="col-8 " href="/true">
                            {" "}
                            <H6DienAnh>{item[6].noiDungChinh}</H6DienAnh>
                          </LinkDienAnh>
                        </div>
                      </DivDienAnh>
                    ) : (
                      ""
                    )}
                    {item[7] ? (
                      <DivDienAnh className="col-6 ">
                        <div className="row">
                          <ImgDienAnhSmall
                            className="col-4"
                            src={item[7].hinhAnh}
                            alt=""
                          />
                          <LinkDienAnh className="col-8 " href="/true">
                            {" "}
                            <H6DienAnh>{item[7].noiDungChinh}</H6DienAnh>
                          </LinkDienAnh>
                        </div>
                      </DivDienAnh>
                    ) : (
                      ""
                    )}
                  </div>
                </DivChild2>
              </div>
              {item[3] ? (
                <div className="4-new col-lg-7 col-12">
                  <ImgDienAnh src={item[3].hinhAnh} alt="" />
                  <LinkDienAnh href="/true">
                    {" "}
                    <h6>{item[3].noiDungChinh}</h6>
                  </LinkDienAnh>
                  <PDienAnh>{item[3].noiDungPhu}</PDienAnh>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      });
    }
  };

  renderDienAnhForMobile = () => {
    const arr = [];
    for (let i = 0; i < (this.props.dienAnh.length / 2).toFixed(0); i++) {
      let count = i * 2;
      let count1 = 2 + i * 2;
      const newArr = this.props.dienAnh.slice(count, count1); // manng object
      arr.push(newArr);
    }
    if (this.state.count) {
      const arrFirst = arr.slice(0, this.state.count);
      return arrFirst.map((item, index) => {
        return (
          <div className="row" key={index}>
            {item[0] ? (
              <div className="1-new col-12 ">
                <ImgDienAnh
                  src={item[0].hinhAnh}
                  alt="/true"
                  className="m-auto"
                  style={{ width: "80%" }}
                />
                <LinkDienAnh
                  className="m-auto"
                  href="/true"
                  style={{ width: "80%" }}
                >
                  {" "}
                  <h6>{item[0].noiDungChinh}</h6>
                </LinkDienAnh>
              </div>
            ) : (
              ""
            )}
            {item[1] ? (
              <div className="1-new col-12 ">
                <ImgDienAnh
                  src={item[1].hinhAnh}
                  alt="/true"
                  className="m-auto"
                  style={{ width: "80%" }}
                />
                <LinkDienAnh
                  className="m-auto"
                  href="/true"
                  style={{ width: "80%" }}
                >
                  {" "}
                  <h6>{item[1].noiDungChinh}</h6>
                </LinkDienAnh>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="container">
        <DivFrameDienAnh>{this.renderDienAnh()}</DivFrameDienAnh>
        <DivFrameDienAnh1>{this.renderDienAnhForMobile()}</DivFrameDienAnh1>
        <div className="d-flex justify-content-center mb-5">
          <ButtonDienAnh onClick={this.handleSetCount} className="btn">
            Xem Thêm{" "}
          </ButtonDienAnh>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dienAnh: state.arrTinTucReducer.dienAnh,
  };
};

export default connect(mapStateToProps)(DienAnh);
