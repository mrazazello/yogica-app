import { FC } from "react";

import { Alert } from "@shared/ui/alert/Alert";
import { Preloader } from "@shared/ui/preloader/Preloader";

import { ChantingSelect } from "@entities/chantingDurations";
import { ExerciseDurationSelect } from "@entities/exerciseDurations";
import { LevelSelect } from "@entities/levels";
import { PranoyamaSelect } from "@entities/pranoyamaDurations";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { IPracticeSettings } from "../model/types/practiceSettings";

interface IProps {
  data?: IPracticeSettings;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
}

export const PracticeSettingsCard: FC<IProps> = (props) => {
  const { data, isLoading, error } = props;

  if (error) {
    return <Alert title={error} type="error" />;
  }

  return (
    <>
      {isLoading ? (
        <Preloader text="loading profile data" height="block" />
      ) : (
        <>
          <ExerciseDurationSelect
            selected={data?.preferredDuration.asana.toString()}
          />
          <LevelSelect selected={data?.difficultyLevel} />
          <PranoyamaSelect
            selected={data?.preferredDuration.pranayama.toString()}
          />
          <ChantingSelect
            selected={data?.preferredDuration.chanting.toString()}
          />
          <ShavasanaSelect
            selected={data?.preferredDuration.shavasana.toString()}
          />
        </>
      )}
    </>
  );
};
