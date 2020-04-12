import React from 'react';
import App from './App';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MenuPreview from './components/MenuPreview/MenuPreview';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly with items populated', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Sidebar)).toHaveLength(20);
  expect(wrapper).toMatchSnapshot();
});

it('should display the correct number of total items selected', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(".menu-summary-left").text()).toEqual("0 items");
  wrapper.find(".item").first().simulate("click");
  expect(wrapper.find(".menu-summary-left").text()).toEqual("1 items");
});

it('should add and delete item to the menu preview', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(".menu-preview").text()).toEqual("No item yet :)");
  wrapper.find(".item").first().simulate("click");
  expect(wrapper.find(MenuPreview)).toHaveLength(1);
  wrapper.find(".remove-item").first().simulate("click");
  expect(wrapper.find(MenuPreview)).toHaveLength(0);
  expect(wrapper.find(".menu-preview").text()).toEqual("No item yet :)");
});
