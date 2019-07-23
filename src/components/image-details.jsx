import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  deleteImage,
  updateImageName
} from "../actions";

import "./image-details.less"

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  onImageDelete = (id) => {
    const { deleteImage } = this.props;

    deleteImage(id)
  }

  onInputChange = (id) => {
    const { updateImageName } = this.props;

    updateImageName(id)
  }

  render() {
    const { image } = this.props;

    return (
      <>
        {image &&
          <div className="ImageDetails">
            <img src={image.src} alt={image.name} />
            <input type="text" value={image.name} onChange={() => this.onInputChange(image.id)} />
            <button type="button" onClick={() => this.onImageDelete(image.id)}>
              Delete image
            </button>
          </div>
        }
      </>
    )
  }
}

export default withRouter(connect(
  (store, ownProps) => {
    const { id } = ownProps.match.params;
    const images = store.images;
    const image = images.find(img => img.id === Number(id));

    return {
      image
    }
  },
  {
    deleteImage,
    updateImageName
  }
)(ImageDetails))

