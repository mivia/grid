import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

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

Images.propTypes = {
  images: PropTypes.array
}

export default connect((store) => {
  return {
    images: store.images
  }
})(Images)

