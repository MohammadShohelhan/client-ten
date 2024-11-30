import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import CoffeeInput from "../Pages/CoffeeInput";
import UpdateInput from "../Pages/UpdateInput";
import DetailsPage from "../Pages/DetailsPage";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import ForgetPassword from "../components/Authentication/ForgetPassword";
import Users from "../Pages/Users";
import UserInfoTable from "../components/UserInfoTable";
import PrivateRoute from "../Provider/PrivateRoute";

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
        element:<PrivateRoute> <CoffeeInput></CoffeeInput></PrivateRoute>,
      },
      {
        path: "/coffees/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
      },
      {
        path: "/updatecoffee/:id",
        element:<PrivateRoute> <UpdateInput></UpdateInput></PrivateRoute>,
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
      {
        path: "/allusers",
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        loader: () => fetch("http://localhost:4000/allusers"),
      },

      {
        path: "/userUpdate",
        element: <PrivateRoute><UserInfoTable></UserInfoTable></PrivateRoute>,
        loader: () => fetch("http://localhost:4000/allusers"),
      },
    ],
  },
]);

export default router;
