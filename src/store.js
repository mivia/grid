import { applyMiddleware, compose, createStore as internalCreateStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const initialState = {
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const createStore = () => internalCreateStore(
  reducer,
  initialState,
  enhancer
);

const store = createStore({});

export default store;
