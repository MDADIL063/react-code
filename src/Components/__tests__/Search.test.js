import { fireEvent, render, screen } from "@testing-library/react";
import BodyComponent from "../BodyComponent";
import MOCK_DATA from "../mocks/resMockList.json";
import { act } from "react-dom/test-utils";
// We Use act function to perform Async Operation
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  //fake api call
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search res List with pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

// it("Should Search Top Rated restaurant List on click", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <BodyComponent />
//       </BrowserRouter>
//     )
//   );

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");
//   expect(cardsBeforeSearch.length).toBe(20);
//   const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });

//   fireEvent.click(topRatedBtn);

//   const cardsAfterSearch = screen.getAllByTestId("resCard");

//   expect(cardsAfterSearch.length).toBe(17);
// });
