import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from "./components/Cart/Cart";
import './App.css'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider> 

          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={< ItemListContainer />} /> 
              <Route path="/categoria/:categoria" element={ < ItemListContainer /> } /> {/* filtro de prod. */}
              <Route path="/detalle/:id" element={ < ItemDetailContainer /> } />
              <Route path="/carrito" element={ < Cart /> } />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              
              <Route index element={<Login/>} />

              <Route path="alta-productos" element={<RutaProtegida>
                <ProductFormContainer />
              </RutaProtegida>} />

            </Route>

          </Routes>

        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
