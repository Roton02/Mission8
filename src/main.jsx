import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Homepage from './Component/HomePage/Homepage';
import BookDetails from './Component/Books/BookDetails';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import Pages from './Component/Pages/Pages';
import ReadBlogs from './Component/ReadBlog/ReadBlogs';
import WishesBlog from './Component/WishesBlog/WishesBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
        loader: ()=>fetch('Books.json')
      },
      {
        path: ':bookId',
        element:<BookDetails></BookDetails>,
        loader: ({params})=>fetch(`${params.bookId}`)
      },
      {
        path:'/ListedBooks',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element: <ReadBlogs></ReadBlogs>
          },
          {
            path:'WishesBlog',
            element: <WishesBlog></WishesBlog>
          }
        ]
      },
      {
        path:'/Pages',
        element: <Pages></Pages>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
