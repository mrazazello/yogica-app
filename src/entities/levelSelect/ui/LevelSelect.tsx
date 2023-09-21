import { ISelectOption, Select } from "@shared/ui/select/Select";
import { FC } from "react";

const level: ISelectOption[] = [
  { label: "Zero", value: "zero" },
  { label: "Beginner", value: "beginner" },
  { label: "Middle", value: "middle" }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const LevelSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Level"
        required
        name="level"
        data={level}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
