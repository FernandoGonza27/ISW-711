import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/pages/error-page.js';
//pages
import Courses from './components/courses/Courses';
import CreateCourses from './components/courses/CreateCourses';
import UpdateCourses from './components/courses/UpdateCourses';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Courses/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create",
    element: <CreateCourses/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/update/:id",
    element: <UpdateCourses/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
