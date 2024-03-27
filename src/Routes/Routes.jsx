import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Homepage from "../Component/HomePage/Homepage";
import BookDetails from "../Component/Books/BookDetails";
import ListedBooks from "../Component/ListedBooks/ListedBooks";
import ReadBlogs from "../Component/ReadBlog/ReadBlogs";
import WishesBlog from "../Component/WishesBlog/WishesBlog";
import Pages from "../Component/Pages/Pages";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import KidsBooks from "../Component/KidsBook/KidsBooks";
import Subscribe from "../Component/Subscribe/Subscribe";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Homepage></Homepage>,
          loader: ()=>fetch('https://roton02.github.io/JsonData-/Books.json')
        },
        {
          path: '/books/:bookId',
          element:<BookDetails></BookDetails>,
          loader: ({params})=>fetch(`https://roton02.github.io/JsonData-/Books.json?bookId=${params.bookId}`)
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
        },
        {
          path: '/kids',
          element: <KidsBooks></KidsBooks>,
          loader: ()=> fetch('/Kids.json')
        },
        {
          path: '/subscribe',
          element: <Subscribe></Subscribe>
        }
      ]
    },
  ]);