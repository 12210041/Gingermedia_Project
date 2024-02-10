import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router=createBrowserRouter([
  {path:"/",element:(<App />)},
  {path:"userdashboard",element:(<Dashboard/>)},
])
ReactDOM.createRoot(document.getElementById('root')).render(

 <RouterProvider router={router}/>
 
)
