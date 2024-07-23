import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import './index.css'
import SignUp from './routes/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "create-account",
    element: <SignUp />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
