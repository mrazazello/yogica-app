import { FC } from "react";

import { RadioSelect } from "@shared/ui/radioSelect/RadioSelect";
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

export const ChantingRadio: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <RadioSelect
        data={chantingDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
