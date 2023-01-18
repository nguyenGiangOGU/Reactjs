import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header/Header";

class CheckHeader extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      window.location.href = "/";
    }
    return (
      <div>
        {this.props.isLoggedIn && <Header isLoggedIn={this.props.isLoggedIn} />}
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckHeader);
