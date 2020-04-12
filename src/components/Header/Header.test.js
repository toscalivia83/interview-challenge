import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

const selectedItems=[
  {
    id: 1005,
    name: 'Cuban Beef, Brown Rice & Quinoa, Green Pepper & Butterbean Salad',
    dietaries: ['gf', 'df'],
  },
  {
    id: 1006,
    name: 'Thai Chicken, Brown Rice & Quinoa, Lemon & Cashew Greens',
    dietaries: ['gf', 'df', 'rsf', 'n!'],
  }
];

it('should display the correct number of total dietary types', () => {
  const wrapper = mount(<Header items={selectedItems} />);
  expect(wrapper.find(".menu-summary-left").text()).toEqual("2 items");
  expect(wrapper.find(Header).find(".dietary")).toHaveLength(4);
  expect(wrapper.find(Header).find(".menu-summary-right").text()).toContain("2x gf");
  expect(wrapper.find(Header).find(".menu-summary-right").text()).toContain("2x df");
  expect(wrapper.find(Header).find(".menu-summary-right").text()).toContain("1x rsf");
  expect(wrapper.find(Header).find(".menu-summary-right").text()).toContain("1x n!");
});