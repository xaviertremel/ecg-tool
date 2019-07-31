import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'

import Image from '../Components/Image'

const Images = () => {
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetch('https://next.json-generator.com/api/json/get/4JFKtdc-v', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then((result) => setImages(result))
      .catch(error => console.error(error))
  }, [])

  const handleSubmit = (updatedImage) => {
    //TODO update the image via the API
    setImages(images.map(image => image._id === updatedImage._id ? updatedImage : image))
    setSelectedImage(null)
  }

  return (
    <React.Fragment>
      <h1>Images</h1>
      {(images.length === 0) 
        ? <p>Loading...</p>
        : <Table>
            <Table.Header>
              <Table.Row>
                {['Title', 'Author', 'Description', 'Date'].map((header, index) =>
                  <Table.HeaderCell key={index}>
                    {header}
                  </Table.HeaderCell>
                )}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {images.map(image =>
                <Table.Row key={image._id} onClick={() => setSelectedImage(image)} style={{ cursor: 'pointer' }}>
                  <Table.Cell>
                    {image.title}
                  </Table.Cell>
                  <Table.Cell>
                    {image.Author}
                  </Table.Cell>
                  <Table.Cell>
                    {image.description}
                  </Table.Cell>
                  <Table.Cell>
                    {image.created}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
      }
      {selectedImage && 
        <Image 
          open={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
          onSubmit={(updatedImage) => handleSubmit(updatedImage)}
        />
      }
    </React.Fragment>
  )
}

export default Images