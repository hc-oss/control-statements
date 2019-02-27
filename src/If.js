import PropTypes from "prop-types";
import React from "react";

const If = props => {
  if (props.condition) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return null;
};

If.propTypes = {
  condition: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

export default If;
