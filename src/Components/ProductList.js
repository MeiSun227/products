import React from 'react'
import Product from './Product'
import { Table } from 'semantic-ui-react'


const ProductsList = (props) => {
  const products = props.products
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell >Color</Table.HeaderCell>
          <Table.HeaderCell >Price</Table.HeaderCell>
          <Table.HeaderCell>Manufacturer</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {products.map((product) => (<Product key={product.id} product={product} />))}
      </Table.Body>

    </Table>

  )
}
export default ProductsList