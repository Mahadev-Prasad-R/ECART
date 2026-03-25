
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { myMap } from './Map/MyMap.jsx'
import AuthUserContext from './context/AuthUserContext.jsx'
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
 
      <AuthUserContext>
          <CartProvider>
              <RouterProvider router={myMap}/>
          </CartProvider>
      </AuthUserContext>
      
 
)
