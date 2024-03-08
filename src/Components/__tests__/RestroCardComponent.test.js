import { render, screen } from "@testing-library/react";
import RestroCardComponent, { Discount } from "../RestroCardComponent";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should Render Restaurant Card Component with props data", () => {
  render(<RestroCardComponent resp={MOCK_DATA} />);

  const name = screen.getByText("Gurukripa Restaurant - Sarwate");

  expect(name).toBeInTheDocument();
});

// it("Should Render Restaurant Card With Discount Label", () => {
//   render(<Discount resp={<RestroCardComponent  />} />);

//   const discount = screen.getByText("header");

//   expect(discount).toBeInTheDocument();
// });
