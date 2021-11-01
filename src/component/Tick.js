import React, { Component } from 'react';
import './Tick.css'

var today = new Date();

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div class="Clock">
        <span>
          {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()}
          <span> </span>
          {new Date().toLocaleTimeString()}
        </span>
      </div>
    );
  }
};

export default Tick;