import { FC } from "react";

import { ShavasanaDurationEnum } from "../model/types/shavasanaDuration";
import { RadioSelect } from "@shared/ui/radioSelect/RadioSelect";

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

export const ShavasanaRadio: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <RadioSelect
        data={shavasanaDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
