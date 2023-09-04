import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import About from './components/About/About.jsx';
import Career from './components/Career/Career';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Providers from './components/Providers/Providers.jsx';
import Profile from './components/Profile/Profile.jsx';
import Private from './components/Private/Private.jsx';
import Forgot from './components/Forgot/Forgot.jsx';
import Category from './components/Category/Category.jsx';
import NewsLayout from './components/NewsLayout/NewsLayout';
import Terms from './components/Terms/Terms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "career",
        element: <Private><Career></Career></Private>
      },
      {
        path: "/categories/:id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: "register",
    element: <Register></Register>
  },
  {
    path: "/news/:id",
    element: <Private><NewsLayout></NewsLayout></Private>,
    loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "forgot",
    element: <Forgot></Forgot>
  },
  {
    path: "profile",
    element: <Private><Profile></Profile></Private>
  },
  {
    path: "terms",
    element: <Terms></Terms>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router}></RouterProvider>
    </Providers>
  </React.StrictMode>,
)
