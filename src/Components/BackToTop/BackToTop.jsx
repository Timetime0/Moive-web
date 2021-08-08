import React, { Component } from "react";
import {
  BtnbackToTop,
  DivbackToTop,
} from "../../StyledComponent/BackToTop/backToTop";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <DivbackToTop className="backToTop">
        {this.state.is_visible && (
          <BtnbackToTop onClick={this.scrollToTop}>
            <i className="fa fa-angle-double-up"></i>
          </BtnbackToTop>
        )}
      </DivbackToTop>
    );
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
}
