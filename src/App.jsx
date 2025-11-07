import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from "./components/Cart/Cart";
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />

          <Routes>
            <Route path="/" element={<ItemListContainer />} /> {/* home - all*/}
            <Route path='/categoria/:categoria' element={<ItemListContainer />} /> {/* filtro de prod. */}
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
