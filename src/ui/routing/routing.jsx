import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import AppRoutes from './app.route';

const routes = createBrowserRouter(AppRoutes);

function Routing() {
  return (
    <RouterProvider router={routes} />
  );
}

export default Routing;
