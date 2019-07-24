import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from 'prop-types';

import {
  deleteImage,
  updateImageName
} from "../actions";

import "./image-details.less"

class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { image, history } = this.props;
    if(!image) {
      history.push('/images');
    }
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
      <div>
        {image &&
          <div className="ImageDetails">
            <img src={image.src} alt={image.name} />
            <input type="text" value={image.name} onChange={(event) => this.onInputChange(event, image.id)} />
            <button type="button" onClick={() => this.onImageDelete(image.id)}>
              Delete image
            </button>
          </div>
        }
      </div>
    )
  }
}

ImageDetails.propTypes = {
  image: PropTypes.object,
  deleteImage: PropTypes.func,
  updateImageName: PropTypes.func
}

export default withRouter(connect(
  (store, ownProps) => {
    const { pathname } = ownProps.location;
    const id = Number(pathname.replace('/images/', ''))
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

