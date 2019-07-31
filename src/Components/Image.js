import React, { useState } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

const Image = (props) => {
  const [values, setValues] = useState({
    title: props.image.title,
    Author: props.image.Author,
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Modal.Header>Image</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Form onSubmit={() => props.onSubmit({ ...props.image, ...values })}>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Title' value={values.title} onChange={handleChange('title')} />
            </Form.Field>
            <Form.Field>
              <label>Author</label>
              <input placeholder='Author' value={values.Author} onChange={handleChange('Author')} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default Image