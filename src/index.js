import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Clock({locale}) {
//   return (
//     <h1>{new Date().toLocaleTimeString(locale)}</h1>
//   )
// }

class Clock extends React.Component {
  render() {
    return (
      <h1><span>{this.props.children}</span>{new Date().toLocaleTimeString(this.props.locale)}</h1>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock locale="bn-BD">test</Clock>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
