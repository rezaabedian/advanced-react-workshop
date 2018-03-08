import React, { Component } from "react";
import { render } from "react-dom";
import withMouse from "./withMouse";

class App extends Component {
  render() {
    const { mouse } = this.props;

    return (
      <div
        style={{
          height: "100vh",
          cursor: "crosshair"
        }}
      >
        {mouse ? (
          <h1>
            Mouse is at ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>Wait for it!</h1>
        )}
      </div>
    );
  }
}

const MouseyApp = withMouse(App);
export default MouseyApp;
