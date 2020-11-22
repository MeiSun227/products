import React from 'react'
import { Table } from 'semantic-ui-react'

const Product = (props) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>{props.product.name} </Table.Cell>
        <Table.Cell>{props.product.type}</Table.Cell>
        <Table.Cell>{props.product.color.join(', ')}</Table.Cell>
        <Table.Cell>{props.product.price}</Table.Cell>
        <Table.Cell>{props.product.manufacturer}</Table.Cell>
      </Table.Row>
    </>
  )
}

export default Product