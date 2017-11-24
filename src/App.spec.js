import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import {ContentListContainer} from './content-list/contentList';

it('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.length).toEqual(1);
});

it('renders 1 <ContentList />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ContentListContainer).length).toEqual(1);
});
