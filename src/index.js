import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//village
class Koala extends React.Component {
  render() {
    return <Box />;
  }
}

//neighborhood
class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <EarLeft />
        <EarRight />
        <EyeLeft />
        <EyeRight />
        <Head />
        <Nose />
        <HairLeft />
        <HairRight />
      </div>
    );
  }
}

//blocks
class EarLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEarLeft />
        <InnerEarLeft />
      </div>
    );
  }
}

class EarRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEarRight />
        <InnerEarRight />
      </div>
    );
  }
}

class EyeLeft extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeLeft />
        <PupilLeft />
      </div>
    );
  }
}
class EyeRight extends React.Component {
  render() {
    return (
      <div>
        <OuterEyeRight />
        <PupilRight />
      </div>
    );
  }
}

//houses
class Head extends React.Component {
  render() {
    return <div className="head" />;
  }
}

class Nose extends React.Component {
  render() {
    return <div className="nose" />;
  }
}

class HairLeft extends React.Component {
  render() {
    return <div className="hair-left" />;
  }
}

class HairRight extends React.Component {
  render() {
    return <div className="hair-right" />;
  }
}

class OuterEarRight extends React.Component {
  render() {
    return <div className="outer-ear-right" />;
  }
}

class InnerEarRight extends React.Component {
  render() {
    return <div className="inner-ear-right" />;
  }
}

class OuterEarLeft extends React.Component {
  render() {
    return <div className="outer-ear-left" />;
  }
}

class InnerEarLeft extends React.Component {
  render() {
    return <div className="inner-ear-left" />;
  }
}

class OuterEyeLeft extends React.Component {
  render() {
    return <div className="outer-eye-left" />;
  }
}

class PupilLeft extends React.Component {
  render() {
    return <div className="pupil-left" />;
  }
}

class OuterEyeRight extends React.Component {
  render() {
    return <div className="outer-eye-right" />;
  }
}

class PupilRight extends React.Component {
  render() {
    return <div className="pupil-right" />;
  }
}

//"inject" to DOM
ReactDOM.render(<Koala />, document.getElementById("koala"));
