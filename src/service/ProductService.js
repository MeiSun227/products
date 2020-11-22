import axios from 'axios'

axios.defaults.headers.common['x-force-error-mode'] = 'all'

const getAllProducts = async (type) => {
  const queriedType = (type === null || type === '') ? 'jackets' : type
  let data = JSON.parse(localStorage.getItem(queriedType))
  console.log(data)
  if (!data) {
    const response = await axios.get(`https://bad-api-assignment.reaktor.com/products/${queriedType}`)
    data = response.data
    localStorage.setItem(queriedType, JSON.stringify(data.silce(0,30000)))
  }
  return data
}

export default { getAllProducts }