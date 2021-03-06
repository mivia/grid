import {
  UPDATE_IMAGE_NAME,
  DELETE_IMAGE
} from '../actions';

const defaultState = {
  images: [
    {
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 1
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 2
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 3
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 4
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 5
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 6
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 7
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 8
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 9
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 10
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 11
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 12
    },{
      src: 'http://placekitten.com/200/300',
      name: 'img1',
      id: 13
    },
  ]
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_IMAGE_NAME: {
      const { name, id } = action;
      const { images } = state;

      const imageToUpdate = images.find(image => image.id === id);
      const imageToUpdateIndex = images.indexOf(imageToUpdate);

      const updatedImage = {
        ...imageToUpdate,
        name
      }

      const imagesCopy = [...images];
      imagesCopy[imageToUpdateIndex] = updatedImage;

      return {
        images: imagesCopy
      }
    }

    case DELETE_IMAGE: {
      const { id } = action;
      const { images } = state;
      const updatedImages = images.filter(image => image.id != id)

      return {
        images: updatedImages
      }
    }

    default: return state;
  }
}
