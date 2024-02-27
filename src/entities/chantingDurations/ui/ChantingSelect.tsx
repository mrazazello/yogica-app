import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { ChantingDurationEnum } from "../model/types/chantingDuration";

interface ISelectItem {
  label: string;
  value: ChantingDurationEnum;
}

const chantingDurations: ISelectItem[] = [
  { label: "no", value: ChantingDurationEnum["0MIN"] },
  { label: "3 minutes", value: ChantingDurationEnum["3MIN"] },
  { label: "5 minutes", value: ChantingDurationEnum["5MIN"] }
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
        data={chantingDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
