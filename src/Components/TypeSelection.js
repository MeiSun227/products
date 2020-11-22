import React from 'react'
import { Select } from 'semantic-ui-react'
const options = [
  { key: 1, text: 'Jacket', value: 'jackets' },
  { key: 2, text: 'Shirts', value: 'shirts' },
  { key: 3, text: 'Accessories', value: 'accessories' },]

const ProductSelect = ({ onChange }) => {
  return (
    <Select
      onChange={onChange}
      clearable
      options={options}
      selection
      placeholder='select categories' />
  )
}

export default ProductSelect