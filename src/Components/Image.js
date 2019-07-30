import React from 'react'
import { Modal } from 'semantic-ui-react'

const Image = (props) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <h1>Image</h1>
      <p>{props.image.title}</p>
    </Modal>
  )
}

export default Image