import { createBrowserRouter } from 'react-router'
import { LoginPage } from '@/pages/login'
import { DashboardHomePage } from '@/pages/dashboard/home'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])
