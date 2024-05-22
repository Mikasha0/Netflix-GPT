import React from "react";
import { useDispatch } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ProfilePage from "./ProfilePage";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/profile",
      element:<ProfilePage/>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
