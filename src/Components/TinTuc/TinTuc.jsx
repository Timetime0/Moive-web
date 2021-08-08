import React, { Component } from "react";
import { connect } from "react-redux";
import { DivTinTuc, LinkTinTuc } from "../../StyledComponent/TinTuc/TinTuc";
import DienAnh from "./DienAnh";
import KhuyenMai from "./KhuyenMai";
import Review from "./Review";

class TinTuc extends Component {
  render() {
    return (
      <DivTinTuc id="tinTuc">
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <LinkTinTuc
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </LinkTinTuc>
          </li>
          <li className="nav-item" role="presentation">
            <LinkTinTuc
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Riview
            </LinkTinTuc>
          </li>
          <li className="nav-item" role="presentation">
            <LinkTinTuc
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Khuyến Mãi
            </LinkTinTuc>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <DienAnh />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Review />
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <KhuyenMai />
          </div>
        </div>
      </DivTinTuc>
    );
  }
}

export default connect(null)(TinTuc);
