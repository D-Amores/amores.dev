import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectDetail from '../pages/ProjectDetail'
import Layout from '../components/layout/Layout'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetail />,
      },
    ],
  },
])