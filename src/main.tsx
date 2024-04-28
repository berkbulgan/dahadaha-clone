import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import CampaignDetails from './pages/Detail';

import 'react-loading-skeleton/dist/skeleton.css'
import "./style.scss";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/campaign/:seoName/:id',
    element: <CampaignDetails />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
