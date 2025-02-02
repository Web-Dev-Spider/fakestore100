import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Homepage from "../pages/Homepage";
import Profilepage from "../pages/Profilepage";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../pages/Categories";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import CartPage from "../pages/CartPage";
import InformatinModal from "../components/InformatinModal";

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
        element: <div className="flex flex-col justify-center items-center w-full"><h3 className="font-semibold text-sm md:font-light md:text-3xl transition-all duration-300 ease-in-out">Still not decided what should be in this page..... </h3>
          <h4 className="text-sm font-light md:font-semibold transition-all duration ease-in-out">But I like a few menu items in the menu bar...</h4></div>
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
