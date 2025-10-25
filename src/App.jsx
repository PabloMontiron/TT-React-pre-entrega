import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/cartContext/CartProvider';
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
