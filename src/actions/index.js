export const DELETE_IMAGE = 'DELETE_IMAGE';
export const UPDATE_IMAGE_NAME = 'UPDATE_IMAGE_NAME';

export const deleteImage = id => (dispatch) => {
  dispatch({
    type: DELETE_IMAGE,
    id
  });
}

export const updateImageName = (name, id) => (dispatch) => {
  dispatch({
    type: UPDATE_IMAGE_NAME,
    name,
    id
  });
}
