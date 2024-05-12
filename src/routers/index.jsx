import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../screen/MainScreen";
import NavbarLayout from "../layout/NavBarLayout";
import Product from "../screen/Product";

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
    element: <Product />,
  },
]);

export default router;
