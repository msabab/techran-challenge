import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import './index.css'
import Contact from './routes/contact'
import New from './routes/new'
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "view/:contactId",
    element: <Contact />,
  },
  {
    path: "edit/:contactId",
    element: <Contact />,
  },
  {
    path: "new",
    element: <New />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
