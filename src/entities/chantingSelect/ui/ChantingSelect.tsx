import { ISelectOption, Select } from "@shared/ui/select/Select";
import { FC } from "react";

const chantingDuration: ISelectOption[] = [
  { label: "no", value: "0" },
  { label: "3 minutes", value: "3" },
  { label: "5 minutes", value: "5" }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const ChantingSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Chanting duration"
        required
        name="chanting"
        data={chantingDuration}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
