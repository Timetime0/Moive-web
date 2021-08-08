import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return <div>Không tìm thấy trang: {this.props.match.url}</div>;
  }
}
