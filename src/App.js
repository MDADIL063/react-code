import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUsComponent from "./Components/ContactUsComponent";
import AboutUsComponent from "./Components/AboutUsComponent";
import Error404Page from "./Components/Error404Page";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayOut = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/aboutUs",
        element: <AboutUsComponent />,
      },
      {
        path: "/contactUs",
        element: <ContactUsComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error404Page />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
