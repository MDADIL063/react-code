import { Sum } from "../Sum";

test("should first", () => {
  const result = Sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
