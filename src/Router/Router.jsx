import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/events.json"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        loader: () => fetch("/images.json"),
        element: (
          <PrivateRoute>
            <Login></Login>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        loader: () => fetch("/images.json"),
        element: (
          <PrivateRoute>
            <Register></Register>
          </PrivateRoute>
        ),
      },
    ],
  },
]);


export default router