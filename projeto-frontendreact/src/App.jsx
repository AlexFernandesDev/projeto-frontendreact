import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Filter } from './components/Filter/Filter'
import { Home } from './components/Home/Home'
import { Cart } from './components/Cart/Cart'
import productsList from './assets/producstList'
import styled, { createGlobalStyle } from 'styled-components'



const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Container = styled.div`
  background-color: black;
  display: flex;
  height: 110vh;
  width: 100vw; 
`;


function App() {
  const [minFilter, setMinFilter]=useState()
  const [maxFilter, setMaxFilter]=useState()
  const [searchFilter, setSearchFilter]=useState('')
  const [cart, setCart]=useState([])
  const [amount, setAmount]=useState(0)

 function filterProducts(products){
  return products.filter((product) => {
    if (minFilter && product.value < minFilter) {
      return false
    }
    if (maxFilter && product.value > maxFilter) {
      return false
    }
    if (searchFilter && !product.name.toLowerCase().includes(searchFilter.toLowerCase())){
      return false
    }
    return true
  });
 }

 const filteredProducts = filterProducts(productsList)

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        <Filter 
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home products={filteredProducts}
          cart={cart} 
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
        <Cart cart={cart} 
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </Container>
    </>
  )
}

export default App
