import { ISelectOption, Select } from "@shared/ui/select/Select";
import { FC } from "react";

const duration: ISelectOption[] = [
  { label: "5 minutes", value: "5" },
  { label: "15 minutes", value: "15" },
  { label: "30 minutes", value: "30" },
  { label: "45 minutes", value: "45" },
  { label: "1 hour", value: "60" }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const DurationSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Exercises duration"
        required
        name="duration"
        data={duration}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
