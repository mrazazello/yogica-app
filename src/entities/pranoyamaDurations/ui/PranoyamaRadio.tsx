import { FC } from "react";

import { PranoyamaDurationEnum } from "../model/types/pranoyamaDuration";
import { RadioSelect } from "@shared/ui/radioSelect/RadioSelect";

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

export const PranoyamaRadio: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <RadioSelect
        data={pranoyamaDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
