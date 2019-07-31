import React, { useState } from 'react'
import _ from 'lodash'

import { Form } from 'semantic-ui-react'

const SearchField = ({ onFilterImages }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (searchTerm) => {
    setSearchTerm(searchTerm)
    onFilterImages(searchTerm)
  }

  return (
    <Form.Input
      type="text"
      value={searchTerm}
      onChange={_.debounce((e) => handleChange(e.target.value), 500, { leading: true })}
      placeholder="Browse images by title"
    />
  )
}

export default SearchField