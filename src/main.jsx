import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import AuthContext from './store/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './store/ProductContext.jsx';
import CartProvider from './store/CartContext.jsx';
import ThemeProvider from './store/DarkModecontext.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AuthContext>
        <ProductProvider>
          <CartProvider>
            <ThemeProvider>
              <App/>
            </ThemeProvider>
          </CartProvider>
         </ProductProvider>
        <ToastContainer/>
      </AuthContext>
    </BrowserRouter>
  </>
)
