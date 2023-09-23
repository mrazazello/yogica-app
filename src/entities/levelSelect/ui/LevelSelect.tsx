import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { LevelsEnum } from "../model/types/levels";

interface ISelectItem {
  label: string;
  value: LevelsEnum;
}

const levels: ISelectItem[] = [
  { label: "Zero", value: LevelsEnum.ZERO },
  { label: "Beginner", value: LevelsEnum.BEGINNER },
  { label: "Middle", value: LevelsEnum.MIDDLE }
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
