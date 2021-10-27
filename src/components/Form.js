import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Javascript is awesome",
    library: "React",
    isAwesome: true,
  };

  handleChange = (e) => {
    // ES6 computed properties
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log(e.target.type);
      console.log("nothing here");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange} />

          <br />
          <br />
          <select name="library" value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>

          <br />
          <br />
          <label htmlFor="isAwesome">
            is awesome
            <input
              name="checkbox"
              type="checkbox"
              id="isAwesome"
              checked={isAwesome}
              onChange={this.handleChange}
            />
          </label>

          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
