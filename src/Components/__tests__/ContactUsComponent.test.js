import { render, screen } from "@testing-library/react";
import ContactUsComponent from "../ContactUsComponent";
import "@testing-library/jest-dom";

describe("Test Cases for Contact Us Component", () => {
  // we can write it also instead of test

  //Function
  // beforeAll(()=>{
  //   console.log("BeforeAll");
  // })
  // beforeEach(()=>{
  //   console.log("BeforeAll");
  // })
  // afterEach(()=>{
  //   console.log("BeforeAll");
  // })
  // afterAll(()=>{
  //   console.log("BeforeAll");
  // })
  it("should Load Contact us Component", () => {
    render(
      <ContactUsComponent /> // render for load on the JSDOM
    );

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should Load Button inside Contact us Component", () => {
    render(
      <ContactUsComponent /> // render for load on the JSDOM
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("should Load input box inside Contact us Component", () => {
    render(
      <ContactUsComponent /> // render for load on the JSDOM
    );

    // Querying
    const textBox = screen.getAllByRole("textbox");

    // Assertion
    expect(textBox.length).toBe(2);
  });
});
