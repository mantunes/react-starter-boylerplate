// import React from 'react';
// import toJson from 'enzyme-to-json';
// import mockStore from 'redux-mock-store';
import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import List from '../List';
import Item from '../Item';

Enzyme.configure({ adapter: new Adapter() });

const names = [
  { id: 1, name: 'Andre' },
  { id: 2, name: 'Joao' },
  { id: 3, name: 'Rui' },
  { id: 4, name: 'Sara' },
];

it('Renders all children', () => {
  const wrapper = shallow(<List names={names} onRemove={() => null} />);

  expectChai(wrapper.find(Item).length).to.equal(names.length);
  expect(toJson(wrapper)).toMatchSnapshot();
});
