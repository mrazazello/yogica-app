import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { ShavasanaDurationEnum } from "../model/types/shavasanaDuration";

interface ISelectItem {
  label: string;
  value: ShavasanaDurationEnum;
}

const shavasanaDurations: ISelectItem[] = [
  { label: "no", value: ShavasanaDurationEnum.NO },
  { label: "yes", value: ShavasanaDurationEnum.YES }
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
        data={shavasanaDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
