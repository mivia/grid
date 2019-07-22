import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

export default function Image({ ...props }) {
  return (
    <>
      <img {...props} />
    </>
  )
}
