import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./storage/CartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenidos" />}
            />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer greeting="Bienvenidos" />}
            />
            <Route
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartView />} />
            <Route
              path="/checkout/:orderid"
              element={<h1 className="checkout">Gracias por tu compra, que lo disfrutes</h1>} />
            <Route
            path="*"
            element={<h1>404: Ruta no encontrada</h1>}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;