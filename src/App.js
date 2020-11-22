import React, { useState, useEffect } from 'react'
import ProductService from './service/ProductService'
import ProductsList from './Components/ProductList'
import ColorSelect from './Components/ColorSelection'
import { Container, Header, Grid } from 'semantic-ui-react'
import ProductSelect from './Components/TypeSelection'

const App = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])


  const handleColorChange = (_event, data) => {
    const newProducts = products.filter(product => product.color.includes(data.value))
    setFilteredProducts(newProducts)
  }

  const handleTypeChange = (_event, data) => {
    console.log(data.value)
    ProductService
      .getAllProducts(data.value)
      .then(productData => {
        setProducts(productData)
      })
  }

  useEffect(() => {
    ProductService
      .getAllProducts('jackets')
      .then(productData => {
        setProducts(productData)
      })
  }, [])

  let renderedProducts = filteredProducts.length > 0 ? filteredProducts : products
  return (
    <div className="App">
      <Container >
        <Header as='h2'>products list </Header>
        <Grid columns={2}>
          <Grid.Column>
            <Grid columns={2} doubling stackable>
              <Grid.Column>
                <ProductSelect onChange={handleTypeChange} />
              </Grid.Column>
              <Grid.Column>
                <ColorSelect onChange={handleColorChange} products={products} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
        <ProductsList onChange={handleTypeChange} products={renderedProducts} />
      </Container>
    </div>
  )
}

export default App;
