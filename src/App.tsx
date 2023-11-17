import { RoutesMain } from "./routes";
import "./styles/animations.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <ToastContainer />
            <RoutesMain />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
