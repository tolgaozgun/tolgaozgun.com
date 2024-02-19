import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <HomePage /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
