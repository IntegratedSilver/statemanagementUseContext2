import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routing /routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
