import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Service from '../Pages/Services/Service/Service';
import Pictures from '../Components/Pictures/Pictures';
import Opinion from '../Components/Opinion/Opinion';
import Developer from '../Components/Developer/Developer';

  export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/services',
          element:<Service></Service>,
        },
        {
          path:'/photos',
          element: <Pictures></Pictures>
        },
        {
          path:'/opinions',
          element: <Opinion></Opinion>
        },
        {
          path: '/developer',
          element: <Developer></Developer>
        }
      ]
    },
  ]);