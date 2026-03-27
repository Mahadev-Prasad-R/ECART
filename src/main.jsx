
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { myMap } from './Map/MyMap.jsx'
import AuthUserContext from './context/AuthUserContext.jsx'
import CartProvider from './context/CartContext.jsx'

import { WishlistProvider } from './context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
 
      <AuthUserContext>
          <CartProvider>
              <WishlistProvider>
                  <RouterProvider router={myMap}/>
              </WishlistProvider>
          </CartProvider>
      </AuthUserContext>
      
 
)
