import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from '../layout/AuthLayout';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../pages/HomePage';
import PublicRoute from '../components/PublicRoute';
import ProtectedRoute from '../components/ProtectedRoute';
import ProductsPage from '../pages/ProductsPage';
import UsersPage from '../pages/UsersPage';

const AppRouter = () => {
    const router = createBrowserRouter([
       {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: '/',
                    element: <AuthLayout />
                }
            ]
            
        },
       
        {
            path: '/home',
            element: <ProtectedRoute />,
            children: [
                {
            path: '/home',
            element: <HomeLayout />,
            children:[
                {
                    path: 'home',
                    element: <HomePage />
                },

                {
                    path: 'products',
                    element: <ProductsPage />
                },

                {
                    path: 'users',
                    element: <UsersPage />
                },


            ]
            
        }
            ]
        }
    ]);

  return <RouterProvider router={router}/>
}

export default AppRouter