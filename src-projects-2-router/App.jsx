import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import NotfoundPage from './pages/NotfoundPage';
import CreatePost from './pages/CreatePost';
import SinglePage from './pages/SinglePage';
import LoginPage from './pages/LoginPage';

import { Layout } from './components/Layout';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "posts",
        element: <BlogPage />,
      },
      {
        path: "posts/:id",
        element: <SinglePage />,
      },
      {
        path: "posts/new",
        element: (
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        ),
      },
      {
        path: "about-us",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotfoundPage />,
      }
    ]
  }
]);
