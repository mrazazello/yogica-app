import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ChantingSelect } from "@entities/chantingDurations";
import { ShowErrors } from "@entities/error";
import { ExerciseDurationSelect } from "@entities/exerciseDurations";
import { LevelSelect, LevelsEnum } from "@entities/levels";
import {
  fetchPracticeSettingsData,
  getPracticeSettingsData,
  getPracticeSettingsIsLoading,
  practiceSettingsActions
} from "@entities/practiceSettings";
import { PranoyamaSelect } from "@entities/pranoyamaDurations";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Button } from "@shared/ui/button/Button";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { VSpace } from "@shared/ui/vSpace/VSpace";
import { getRandomClass } from "../model/services/getRandomClass/getRandomClass";

export const StartClassForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const settings = useSelector(getPracticeSettingsData);
  const loading = useSelector(getPracticeSettingsIsLoading);

  useEffect(() => {
    dispatch(fetchPracticeSettingsData());
  }, [dispatch]);

  const changeAsanaDurationHandler = useCallback(
    (value: string) => {
      settings &&
        dispatch(
          practiceSettingsActions.updatePracticeSettings({
            ...settings,
            practicePreferredDuration: {
              ...settings?.practicePreferredDuration,
              asana: Number(value)
            }
          })
        );
    },
    [dispatch, settings]
  );

  const changeLevelHandler = useCallback(
    (value: string) => {
      settings &&
        dispatch(
          practiceSettingsActions.updatePracticeSettings({
            ...settings,
            difficultyLevel: value as LevelsEnum
          })
        );
    },
    [dispatch, settings]
  );

  const changePranoyamaHandler = useCallback(
    (value: string) => {
      settings &&
        dispatch(
          practiceSettingsActions.updatePracticeSettings({
            ...settings,
            practicePreferredDuration: {
              ...settings?.practicePreferredDuration,
              pranayama: Number(value)
            }
          })
        );
    },
    [dispatch, settings]
  );

  const changeChantingHandler = useCallback(
    (value: string) => {
      settings &&
        dispatch(
          practiceSettingsActions.updatePracticeSettings({
            ...settings,
            practicePreferredDuration: {
              ...settings?.practicePreferredDuration,
              chanting: Number(value)
            }
          })
        );
    },
    [dispatch, settings]
  );

  const changeShavasanaHandler = useCallback(
    (value: string) => {
      settings &&
        dispatch(
          practiceSettingsActions.updatePracticeSettings({
            ...settings,
            practicePreferredDuration: {
              ...settings?.practicePreferredDuration,
              shavasana: Number(value)
            }
          })
        );
    },
    [dispatch, settings]
  );

  const submitHandler = useCallback(async () => {
    if (settings) {
      const res = await dispatch(getRandomClass(settings));
      if (
        res.meta.requestStatus === "fulfilled" &&
        typeof res.payload === "object"
      ) {
        navigate(routePaths.classDetail.URL(res.payload.id));
      }
    }
  }, [settings, dispatch, navigate]);

  if (loading) {
    return <Preloader text="Loading settings..." />;
  }

  return (
    settings && (
      <>
        <ShowErrors />
        <LevelSelect
          onChange={changeLevelHandler}
          selected={settings.difficultyLevel}
        />
        <ExerciseDurationSelect
          onChange={changeAsanaDurationHandler}
          selected={settings?.practicePreferredDuration.asana.toString()}
        />
        <PranoyamaSelect
          onChange={changePranoyamaHandler}
          selected={settings?.practicePreferredDuration.pranayama.toString()}
        />
        <ChantingSelect
          onChange={changeChantingHandler}
          selected={settings?.practicePreferredDuration.chanting.toString()}
        />
        <ShavasanaSelect
          onChange={changeShavasanaHandler}
          selected={settings?.practicePreferredDuration.shavasana.toString()}
        />
        <VSpace />
        <Button onClick={submitHandler} disabled={loading}>
          Start
        </Button>
      </>
    )
  );
};
