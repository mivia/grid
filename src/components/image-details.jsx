import React from "react";
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
    const { deleteImage, history } = this.props;

    deleteImage(id);
    history.push('/images');
  }

  onInputChange = (event, id) => {
    const { updateImageName } = this.props;
    const newName = event.target.value;

    updateImageName(newName, id);
  }

  render() {
    const { image } = this.props;

    return (
      <>
        {image &&
          <div className="ImageDetails">
            <img src={image.src} alt={image.name} />
            <input type="text" value={image.name} onChange={(event) => this.onInputChange(event, image.id)} />
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

