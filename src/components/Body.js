import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import GPTSearch from "./GPTSearch";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Reset from "./Reset";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [{
        path: "/reset",
        element: <Reset />,
      }],
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "/gptSearch",
      element: <GPTSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
