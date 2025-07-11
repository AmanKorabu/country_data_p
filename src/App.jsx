import React from 'react'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Country from './Pages/Country'
import Contact from './Pages/Contact'
import AppLayout from './Components/Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './Pages/CountryDetails'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>, 
      errorElement:<ErrorPage/>,
      children:[
        {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'country',
      element:<Country/>
    },
    {
      path:"/country/:id",
      element:<CountryDetails/>
    },
    {
      path:'contact',
      element:<Contact/>
    }
      ]
    }
    
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
};

export default App
