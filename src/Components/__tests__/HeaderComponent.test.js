import { fireEvent, render, screen } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//fireEvent use for checking button change or not onClick

it("Should Load the Header Component with Home Text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent />
      </Provider>
    </BrowserRouter>
  );

  const Img = screen.getAllByRole("img");
  expect(Img.length).toBe(2);
});

// it("Should Change on Click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <HeaderComponent />
//       </Provider>
//     </BrowserRouter>
//   );

//   const LoginButton = screen.getByRole("button",{name:"Login"});
//   fireEvent.click(LoginButton)
//   const LogOutButton = screen.getByRole("button",{name:"LogOut"});
//   expect(LogOutButton).toBeInTheDocument();
// });
