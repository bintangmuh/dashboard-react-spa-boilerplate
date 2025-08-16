import { createBrowserRouter } from 'react-router'
import App from '../App'
import { LoginPage } from '@/pages/login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])
