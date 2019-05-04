import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//village
class Koala extends React.Component {
  render() {
    return <Box colors={this.props.colors} />;
  }
}

//neighborhood
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <EarLeft colors={this.props.colors} />
        <EarRight colors={this.props.colors} />
        <EyeLeft colors={this.props.colors} />
        <EyeRight colors={this.props.colors} />
        <Head color={this.props.colors.lightGray} />
        <Nose color={this.props.colors.brown} />
        <HairLeft color={this.props.colors.lightGray} />
        <HairRight color={this.props.colors.lightGray} />
      </div>
    );
  }
}

//blocks
class EarLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEarLeft color={this.props.colors.lightGray} />
        <InnerEarLeft color={this.props.colors.darkGray} />
      </div>
    );
  }
}

class EarRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEarRight color={this.props.colors.lightGray} />
        <InnerEarRight color={this.props.colors.darkGray} />
      </div>
    );
  }
}

class EyeLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeLeft color={this.props.colors.white} />
        <PupilLeft color={this.props.colors.navy} />
      </div>
    );
  }
}
class EyeRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeRight color={this.props.colors.white} />
        <PupilRight color={this.props.colors.navy} />
      </div>
    );
  }
}

//houses
class Head extends React.Component {
  render() {
    return <div style={{ background: this.props.color }} className="head" />;
  }
}

class Nose extends React.Component {
  render() {
    return <div style={{ background: this.props.color }} className="nose" />;
  }
}

class HairLeft extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="hair-left" />
    );
  }
}

class HairRight extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="hair-right" />
    );
  }
}

class OuterEarRight extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="outer-ear-right"
      />
    );
  }
}

class InnerEarRight extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="inner-ear-right"
      />
    );
  }
}

class OuterEarLeft extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="outer-ear-left"
      />
    );
  }
}

class InnerEarLeft extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="inner-ear-left"
      />
    );
  }
}

class OuterEyeLeft extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="outer-eye-left"
      />
    );
  }
}

class PupilLeft extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="pupil-left" />
    );
  }
}

class OuterEyeRight extends React.Component {
  render() {
    return (
      <div
        style={{ background: this.props.color }}
        className="outer-eye-right"
      />
    );
  }
}

class PupilRight extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.color }} className="pupil-right" />
    );
  }
}

//add this just above ReactDOM code
//props objects
const colorsObject = {
  white: "#FFFFFF",
  lightGray: "#A6BECF",
  darkGray: "#819CAF",
  brown: "#BE845F",
  navy: "#27354A"
};

//"inject" to DOM
ReactDOM.render(
  <Koala colors={colorsObject} />,
  document.getElementById("koala")
);
