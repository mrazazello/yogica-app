import { FC } from "react";

import { Select } from "@shared/ui/select/Select";

import { ExerciseDurationEnum } from "../model/types/exerciseDuration";

interface ISelectItem {
  label: string;
  value: ExerciseDurationEnum;
}

const exerciseDurations: ISelectItem[] = [
  { label: "5 minutes", value: ExerciseDurationEnum["5MIN"] },
  { label: "15 minutes", value: ExerciseDurationEnum["15MIN"] },
  { label: "30 minutes", value: ExerciseDurationEnum["30MIN"] },
  { label: "45 minutes", value: ExerciseDurationEnum["45MIN"] },
  { label: "1 hour", value: ExerciseDurationEnum["60MIN"] }
];

interface IProps {
  selected?: string;
  onChange?: (value: string) => void;
}

export const ExerciseDurationSelect: FC<IProps> = (props) => {
  const { onChange, selected } = props;

  return (
    <>
      <Select
        placeholder="Exercises duration"
        required
        name="duration"
        data={exerciseDurations}
        onChange={onChange}
        selectedValue={selected}
      />
    </>
  );
};
