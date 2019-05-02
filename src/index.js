import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Head extends React.Component {
  render() {
    return <div className="head" />;
  }
}
ReactDOM.render(<Head />, document.getElementById("head-target"));
