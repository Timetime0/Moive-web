import React, { Component } from "react";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import { DivFrameCount } from "../../StyledComponent/ChiTietPhim/CountDown";

class CountdownClock extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 300,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <DivFrameCount>
        <p>
          <i className="fa fa-clock"></i>
          <span>
            {" "}
            <button>{this.state.time.m}</button>:{" "}
            <button>{this.state.time.s}</button>
          </span>
        </p>
      </DivFrameCount>
    );
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.seconds !== this.state.seconds) {
      if (this.state.seconds === 0) {
        Swal.fire({
          title: "Reloading",
          text: "Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút",
          icon: "warning",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonColor: "#f36522",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.go(0);
          }
        });
      }
    }
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
}

export default withRouter(CountdownClock);
