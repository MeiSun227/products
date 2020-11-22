import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Product from '../Components/Product'

test('renders content', () => {
  const product = {
    name: 'Lili',
    type: 'jackets',
    color: ['Blue'],
    price: 55
  }

  const component = render(
    <Product product={product} />
  )

  expect(component.container).toHaveTextContent('jackets')
})