import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button tests", () => {
  test("Button in docement", () => {
    render(<Button text="test button" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
