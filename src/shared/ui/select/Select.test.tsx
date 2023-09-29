import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ISelectOption, Select } from "./Select";

const options: ISelectOption[] = [{ label: "test 1", value: "1" }];

describe("Select tests", () => {
  test("Select is in docement", () => {
    render(
      <Select
        name="test"
        placeholder="test select"
        data={options}
        selectedValue="1"
      />
    );
    expect(screen.getByRole("button")).toHaveTextContent("test 1");
  });
});
