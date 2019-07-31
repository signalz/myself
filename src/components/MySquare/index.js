import React, { Component } from "react";

import "./square.css";
import PropTypes from "prop-types";

class MySquare extends Component {
  render() {
    const { primaryText, secondaryText, icon } = this.props;
    return (
      <div className="square">
        {primaryText}
        {icon}
        {secondaryText}
      </div>
    );
  }
}

MySquare.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};

export default MySquare;
