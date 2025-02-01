import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Homepage from "../pages/Homepage";
import Profilepage from "../pages/Profilepage";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../pages/Categories";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Homepage />
      },
      {
        path: 'products',
        element: <ProductDetails />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'profile',
        element: <Profilepage />
      }, {
        path: 'product-details/:id',
        element: <ProductDetails />
      },
      {
        path: 'categories/product-details/:id',
        element: <ProductDetails />
      },
      {
        path: 'cart',
        element: <CartPage />
      }

    ]
  },
]);

export { router };
