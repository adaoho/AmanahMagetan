import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../screen/MainScreen";
import NavbarLayout from "../layout/NavBarLayout";
import ProductScreen from "../screen/ProductScreen";
import SearchScreen from "../screen/SearchScreen";
import ProfileCartScreen from "../screen/ProfileCartScreen";
import OrderScreen from "../screen/OrderScreen";

const router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <MainScreen />,
      },
    ],
  },
  {
    path: "/product/:slug",
    element: <ProductScreen />,
  },
  {
    path: "/profile/:id/cart",
    element: <ProfileCartScreen />,
  },
  {
    path: "/profile/:id/transaction/:TransId",
    element: <OrderScreen />,
  },
  {
    path: "/search",
    element: <SearchScreen />,
  },
]);

export default router;
