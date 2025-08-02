import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {NotFound,Home, ProductList, ProductDetail, Cart} from './components'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/products",
        element:<ProductList/>
      },
      {
        path:"/product/:id",
        element:<ProductDetail />
      },
      {
        path:"/cartitems",
        element:<Cart/>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
