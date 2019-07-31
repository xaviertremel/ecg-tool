import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import SearchField from './SearchField'
import { Form } from 'semantic-ui-react'

describe('<SearchField />', () => {
  it('renders an input', () => {
    const wrapper = shallow(<SearchField />)
    expect(wrapper.find(Form.Input)).to.have.lengthOf(1)
  })
})