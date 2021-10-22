import React from 'react';

class Clock extends React.Component {
  state = { date: new Date() }

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer)
  }

  tick() {
    this.setState({
        date: new Date() // this.state.date = new Date() - never do this
      })
  }

  render() {
    return (
      <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
    )
  }
}

export default Clock;