import './App.css';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom"
import Photos from './Pages/Photos';
import Cart from './Pages/Cart';
import { CartProvider } from './Context/CartContext';
import Favorites from './Pages/Favorites';

function App() {
  return (
    <div>
    <CartProvider>
      <Header/>
      
    <Routes>
      <Route path="/" element={<Photos />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorite" element={<Favorites />} />
    </Routes>

    </CartProvider>
    </div>
  );
}

export default App;
