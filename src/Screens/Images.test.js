import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Images from './Images'
import SearchField from '../Components/SearchField'

describe('<Images />', () => {
  it('renders search field', () => {
    const wrapper = shallow(<Images />)
    expect(wrapper.find(SearchField)).to.have.lengthOf(1)
  })

  it('renders a loading indicator', () => {
    const wrapper = shallow(<Images />);
    expect(wrapper.contains(<p>Loading...</p>)).to.equal(true)
  })
})