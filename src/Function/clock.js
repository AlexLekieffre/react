import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <fieldset>
        <legend>exo 2 </legend>
        <div>il est {this.state.date.toLocaleTimeString()}. </div>
      </fieldset>
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }
}

export default Clock;
