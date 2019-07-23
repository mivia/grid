import {
  UPDATE_IMAGE_NAME,
  DELETE_IMAGE
} from '../actions';

const defaultState = {}

export default (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_IMAGE_NAME: {
      const { params } = action;

    }

    case DELETE_IMAGE: {
      const { params } = action;
    }

    default: return state;
  }
}
