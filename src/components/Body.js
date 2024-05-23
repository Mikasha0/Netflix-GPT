import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Browse from "./Browse";
import GPTSearch from "./GPTSearch";
import Login from "./Login";
import ProfilePage from "./ProfilePage";

const Body = () => {
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
    },
    {
      path:"/gptSearch",
      element:<GPTSearch/>
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
