import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddLab from './AddLab.jsx'
import GetLab from './GetLab.jsx'
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([{
  path: "/",
  element : <App />,
  children :[
    {
      path : "/",
      element: <GetLab />
    }
  ]
},
{
  path : "/addLab",
  element: <AddLab />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>

    
  </React.StrictMode>,
)
