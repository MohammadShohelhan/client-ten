import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import CoffeeInput from "../Pages/CoffeeInput";
import UpdateInput from "../Pages/UpdateInput";
import DetailsPage from "../Pages/DetailsPage";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import ForgetPassword from "../components/Authentication/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/coffees"),
      },
      {
        path: "/coffee",
        element: <CoffeeInput></CoffeeInput>,
      },
      {
        path: "/coffees/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateInput></UpdateInput>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetpass",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
