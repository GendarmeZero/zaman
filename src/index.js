import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/errorPage.jsx";


import './index.css';
import './App.css';
import Categories from "./components/Category/category";

// import App from './App';
import Land from './components/land/land.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Land  />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <Categories  />,
    errorElement: <ErrorPage />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} />);

