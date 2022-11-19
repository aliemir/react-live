import React, { Component } from "react";
import LiveContext from "../components/Live/LiveContext";

export default function withLive(WrappedComponent, Context = LiveContext) {
  class WithLive extends Component {
    render() {
      return (
        <Context.Consumer>
          {(live) => <WrappedComponent live={live} {...this.props} />}
        </Context.Consumer>
      );
    }
  }

  return WithLive;
}
