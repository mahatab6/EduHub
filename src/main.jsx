import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import ContextProvider from './context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </ContextProvider>
)
