import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./images.less";

function Images(props) {
  const { images } = props;

  return (
    <>
      <div className="Container">
        {images && images.map(image => (
          <img src={image.src} alt={image.name} key={image.id} />
        ))}
      </div>
    </>
  )
}

export default connect((store) => {
  return {
    images: store.images
  }
})(Images)

