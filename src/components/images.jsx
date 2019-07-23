import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import "./images.less";

function Images(props) {
  const { images } = props;

  return (
    <>
      <div className="Container">
        {images && images.map(image => (
          <div key={image.id}>
            <Link to={`/images/${image.id}`}>
              <img src={image.src} alt={image.name} />
              <h3>{image.name}</h3>
            </Link>
          </div>
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

