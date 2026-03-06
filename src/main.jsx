
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { myMap } from './Map/MyMap.jsx'

createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={myMap}>

     </RouterProvider>
 
)
