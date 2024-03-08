import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUsComponent from "./Components/ContactUsComponent";
import AboutUsComponent from "./Components/AboutUsComponent";
import Error404Page from "./Components/Error404Page";
import RestaurantMenu from "./Components/RestaurantMenu";
import ShimmerUI from "./Components/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayOut = () => {
  return (
    <div>
      <Provider store={appStore}>
        <HeaderComponent />
        <Outlet />
      </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error404Page />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
