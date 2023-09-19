import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ISelectOption, Select } from "./Select";

const options: ISelectOption[] = [{ name: "test 1" }];

describe("Select tests", () => {
  test("Select in docement", () => {
    render(<Select name="test" placeholder="test select" data={options} />);
    expect(screen.getByRole("button")).toHaveTextContent("test 1");
  });
});
