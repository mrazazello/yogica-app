import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { PranoyamaDurationEnum } from "../model/types/pranoyamaDuration";

interface ISelectItem {
  label: string;
  value: PranoyamaDurationEnum;
}

const pranoyamaDurations: ISelectItem[] = [
  { label: "no", value: PranoyamaDurationEnum["0MIN"] },
  { label: "3 minutes", value: PranoyamaDurationEnum["3MIN"] },
  { label: "5 minutes", value: PranoyamaDurationEnum["5MIN"] },
  { label: "7 minutes", value: PranoyamaDurationEnum["7MIN"] },
  { label: "10 minutes", value: PranoyamaDurationEnum["10MIN"] }
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
        data={pranoyamaDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
