import React from 'react'

import { Table } from 'semantic-ui-react'

const Images = () => {
  return (
    <React.Fragment>
      <h1>Images</h1>
      <Table>
        <Table.Header>
          <Table.HeaderCell>
            Title
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              blabla
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export default Images