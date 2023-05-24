import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './Pages/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {path:'/home',
    element:<Home/>},
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div data-theme="winter" className='max-w-screen-2xl mx-auto'>
<RouterProvider router={router} />
</div>
  </React.StrictMode>,
)
