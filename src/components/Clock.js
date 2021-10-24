import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(), // this.state.date = new Date() - never do this
    });
  }

  render() {
    console.log("Clock component rendered");
    const { date, locale } = this.state;

    return (
      <div>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <button onClick={this.handleClick} locale="en-US" type="button">
          Click here
        </button>
      </div>
    );
  }
}

export default Clock;
