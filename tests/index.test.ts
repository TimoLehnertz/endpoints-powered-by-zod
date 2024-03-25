import { hello } from "../src/index";

test("hello function returns correct string", () => {
  expect(hello()).toBe("Hello, world!");
});
