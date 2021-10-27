import React from "react";
import Button from "./Button";

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
    const { date, locale } = this.state;

    return (
      <div>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        {locale === "bn-BD" ? (
          <Button
            change={this.handleClick}
            locale="en-US"
            type="button"
            show={false}
            enable={false}
          />
        ) : (
          <Button
            change={this.handleClick}
            locale="bn-BD"
            type="button"
            show
            enable
          />
        )}
      </div>
    );
  }
}

export default Clock;
