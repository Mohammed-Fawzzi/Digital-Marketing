import React, { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';

const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const Blog = lazy(() => import('./Components/Blog/Blog'));
const Contacts = lazy(() => import('./Components/Contacts/Contacts'));

export default function App() {
  const routes = createHashRouter([
    {
      path: '',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={null}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={null}>
              <About />
            </Suspense>
          ),
        },
        {
          path: 'services',
          element: (
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: 'projects',
          element: (
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          ),
        },
        {
          path: 'blog',
          element: (
            <Suspense fallback={null}>
              <Blog />
            </Suspense>
          ),
        },
        {
          path: 'contacts',
          element: (
            <Suspense fallback={null}>
              <Contacts />
            </Suspense>
          ),
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
