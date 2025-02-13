import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PostList from './components/PostList.jsx'
import CreatePost from './components/CreatePost.jsx'

let route = createBrowserRouter([
  {path:'/',element:<App/>,
  children : [
    {path:'/',element:<PostList/>},
    {path:'/create-post',element:<CreatePost/>}
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    
  </StrictMode>,
)
