import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("input tests", () => {
  test("Input in docement", () => {
    render(<Input name="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "test");
  });
});
