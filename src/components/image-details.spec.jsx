import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter} from "react-router";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import ImageDetails from "./image-details";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const images = [
  {
    id: 1,
    src: 'abc',
    name: 'test'
  },
  {
    id: 2,
    src: 'def'
  }
]
const store = {
  images
};

describe("<ImageDetails />", () => {
  const mockedStore = mockStore(store);
  const imageId = 1;
  const imageToTest = images.find(image => image.id === imageId);

  it("renders image based on id route param", () => {
    const component = mount(
      <Provider store={mockedStore}>
        <MemoryRouter initialEntries={[{ pathname: `/images/${imageId}` }]}
  initialIndex={1}>
          <ImageDetails />
        </MemoryRouter>
      </Provider>
    )
    const imageName = component.find('input').props().value;

    expect(imageName).toBe(imageToTest.name);
  })
})
