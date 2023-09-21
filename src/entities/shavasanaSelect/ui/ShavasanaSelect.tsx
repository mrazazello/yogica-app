import { ISelectOption, Select } from "@shared/ui/select/Select";
import { FC } from "react";

const shavasanaDuration: ISelectOption[] = [
  { label: "no", value: "0" },
  { label: "yes", value: "yes" }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const ShavasanaSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Shavasana"
        required
        name="shavasana"
        data={shavasanaDuration}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
