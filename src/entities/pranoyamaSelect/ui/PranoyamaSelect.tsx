import { ISelectOption, Select } from "@shared/ui/select/Select";
import { FC } from "react";

const pranoyamaDuration: ISelectOption[] = [
  { label: "no", value: "0" },
  { label: "3 minutes", value: "3" },
  { label: "5 minutes", value: "5" },
  { label: "7 minutes", value: "7" },
  { label: "10 minutes", value: "10" }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const PranoyamaSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Pranoyama duration"
        required
        name="pranoyama"
        data={pranoyamaDuration}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
