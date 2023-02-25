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
  const [minFilter, setMinFilter]=useState(0)
  const [maxFilter, setMaxFilter]=useState(0)
  const [searchFilter, setSearchFilter]=useState('')
  const [cart, setCart]=useState([])
  const [amout, setAmount]=useState(0)
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        <Filter/>
        <Home products={productsList}/>
        <Cart/>
      </Container>
    </>
      
   
  )
}

export default App
