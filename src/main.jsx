import { lazy, StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Spinner} from './components'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'



const ProductList=lazy(()=>import('./pages/ProductList.jsx'))
const ProductDetail=lazy(()=>import('./pages/ProductDetail.jsx'))
const Checkout=lazy(()=>import("./pages/Checkout.jsx"))
const Cart=lazy(()=>import("./pages/Cart.jsx"))


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
        element:<Suspense fallback={<Spinner />}>
          <ProductList/>
        </Suspense>
      },
      {
        path:"/product/:id",
        element:<Suspense fallback={<Spinner />}>
          <ProductDetail/>
        </Suspense>
      },
      {
        path:"/cartitems",
        element:<Suspense fallback={<Spinner />}>
          <Cart/>
        </Suspense>
      },{
        path:"/checkout",
        element:<Suspense fallback={<Spinner />}>
          <Checkout/>
        </Suspense>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
