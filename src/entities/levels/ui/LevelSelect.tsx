import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { LevelsEnum, LevelsEnumValues } from "../model/types/levels";

interface ISelectItem {
  label: string;
  value: LevelsEnum;
}

const levels: ISelectItem[] = [
  { label: LevelsEnumValues.zero.title, value: LevelsEnum.ZERO },
  { label: LevelsEnumValues.beginner.title, value: LevelsEnum.BEGINNER },
  { label: LevelsEnumValues.middle.title, value: LevelsEnum.MIDDLE }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const LevelSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Level"
        required
        name="level"
        data={levels}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
