import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Image from './Image'
import { Modal, Form, Button } from 'semantic-ui-react'

describe('<Image />', () => {
  it('renders a modal and its form', () => {
    const wrapper = shallow(<Image />)
    expect(wrapper.find(Modal)).to.have.lengthOf(1)
    expect(wrapper.find(Form)).to.have.lengthOf(1)
    expect(wrapper.find(Form.Field)).to.have.lengthOf(2)
    expect(wrapper.find(Button)).to.have.lengthOf(1)
  })
})