import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Navigation = () => (
  <Menu>
    <Menu.Item>
      ECG Tool
    </Menu.Item>
    <Menu.Item position='right'>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
  </Menu>
)

export default Navigation