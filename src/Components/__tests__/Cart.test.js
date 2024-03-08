import { fireEvent, render, screen } from "@testing-library/react";
import MenuList from "../MenuList";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should Load The Menu List", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <MenuList />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Appetizer");
  fireEvent.click(accordionHeader);
});
