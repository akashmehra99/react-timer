import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      runTimmer: true
    };
    this.toggleTimer = this.toggleTimer.bind(this);
  }
  

  componentDidMount() {
    this.setState(({ seconds: this.props.initial }), this.startTimer());
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  stopTimer() {
    clearInterval(this.myInterval);
  }

  toggleTimer() {
    let { runTimmer } = this.state;
    runTimmer = !runTimmer;

    if (runTimmer) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
    this.setState(({ runTimmer }) => ({
      runTimmer: !runTimmer
    }));
  }

  render() {
    const { seconds } = this.state
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value" id="timer-value">{seconds}</div>
         <button className="large" data-testid="stop-button" onClick={this.toggleTimer}>Stop Timer</button>
      </div>
    );
  }
}

