import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Components/Route/Route';
import AuthProvider from './Components/Providers/AuthProvider';
import { ThemeProvider } from '@material-tailwind/react';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
   
  </React.StrictMode>,
)
