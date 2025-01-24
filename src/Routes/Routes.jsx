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
import Diagonostic from '../Pages/Services/Diagonostic/Diagonostic';
import Doctors from '../Pages/Services/Doctors/Doctors';
import Blood from '../Pages/Services/Blood/Blood';
import FireService from '../Pages/Services/FireService/FireService';
import RentHouse from '../Pages/Services/RentHouse/RentHouse';
import Courier from '../Pages/Services/Courier/Courier';
import Shopping from '../Pages/Services/Shopping/Shopping';
import Dentist from '../Pages/Services/Dentist/Dentist';
import DafaultPage from '../Components/DefaultPage/DafaultPage';
import Farmacy from '../Pages/Services/Farmacy/Farmacy';
import Restuarant from '../Pages/Services/Restuarannt/Restuarant';
import Ambulence from '../Pages/Services/Ambulence/Ambulence';
import Bank from '../Pages/Services/Bank/Bank';
import Internet from '../Pages/Services/Internet/Internet';

  export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <DafaultPage></DafaultPage>,
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
        },
        {
          path: '/diagonostic',
          element: <Diagonostic></Diagonostic>
        },
        {
          path: '/doctors',
          element:<Doctors></Doctors>
        },
        {
          path: '/blood',
          element: <Blood></Blood>
        },
        {
          path:'/fireservice',
          element: <FireService></FireService>
        },
        // {
        //   path: '/renthouse',
        //   element: <RentHouse></RentHouse>
        // },
        // {
        //   path: '/courier',
        //   element: <Courier></Courier>
        // },
        // {
        //   path:'/shopping',
        //   element: <Shopping></Shopping>
        // },
        {
          path:"/dentist",
          element: <Dentist></Dentist>
        },
        {
          path:'/farmacy',
          element: <Farmacy></Farmacy>
        },
        {
          path:'/restuarent',
          element: <Restuarant></Restuarant>
        },
        {
          path: '/ambulenc',
          element: <Ambulence></Ambulence>
        },
        {
          path: '/bank',
          element:<Bank></Bank>
        },
        {
          path: '/internet',
          element:<Internet></Internet>
        }
      ]
    },
  ]);