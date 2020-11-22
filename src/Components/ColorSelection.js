import React from 'react'
import { Select } from 'semantic-ui-react'

const ColorSelect = ({ products, onChange }) => {
  let colors = products.map(product => product.color).flat()
  let colorOptions = [...new Set(colors)]
  const colorSelect = colorOptions.map((color) => ({ key: color, text: color, value: color }))

  return (
    <div className="App">
      <Select
        onChange={onChange}
        clearable
        options={colorSelect}
        selection
        placeholder="select color" />
    </div>

  )
}

export default ColorSelect
