import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Navigation from './Navigation'
import { Menu } from 'semantic-ui-react'

describe('<Navigation />', () => {
  it('renders a menu and its logo', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find(Menu)).to.have.lengthOf(1)
    expect(wrapper.find(Menu.Item)).to.have.lengthOf(1)
  })
})