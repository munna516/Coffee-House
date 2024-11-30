import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./Layout/Root.jsx";
import Home from "./Pages/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
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
        path: "/users",
        element: <Users></Users>,
        loader:()=> fetch("http://localhost:5000/users")
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
