import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ChantingSelect } from "@entities/chantingDurations";
import { ExerciseDurationSelect } from "@entities/exerciseDurations";
import { LevelSelect } from "@entities/levels";
import {
  fetchPracticeSettingsData,
  getPracticeSettingsData,
  getPracticeSettingsError,
  getPracticeSettingsIsLoading,
  practiceSettingsActions
} from "@entities/practiceSettings";
import { PranoyamaSelect } from "@entities/pranoyamaDurations";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { VSpace } from "@shared/ui/vSpace/VSpace";
import { getRandomClass } from "../model/services/getRandomClass/getRandomClass";

export const StartClassForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const settings = useSelector(getPracticeSettingsData);
  const error = useSelector(getPracticeSettingsError);
  const loading = useSelector(getPracticeSettingsIsLoading);

  useEffect(() => {
    dispatch(fetchPracticeSettingsData());
  }, [dispatch]);

  const changeAsanaDurationHandler = useCallback(
    (value: string) => {
      dispatch(
        practiceSettingsActions.updatePracticeSettings({
          ...settings,
          preferredDuration: {
            ...settings?.preferredDuration,
            asana: Number(value)
          }
        })
      );
    },
    [dispatch, settings]
  );

  const changeLevelHandler = useCallback(
    (value: string) => {
      dispatch(
        practiceSettingsActions.updatePracticeSettings({
          ...settings,
          difficultyLevel: value
        })
      );
    },
    [dispatch, settings]
  );

  const changePranoyamaHandler = useCallback(
    (value: string) => {
      dispatch(
        practiceSettingsActions.updatePracticeSettings({
          ...settings,
          preferredDuration: {
            ...settings?.preferredDuration,
            pranayama: value
          }
        })
      );
    },
    [dispatch, settings]
  );

  const changeChantingHandler = useCallback(
    (value: string) => {
      dispatch(
        practiceSettingsActions.updatePracticeSettings({
          ...settings,
          preferredDuration: { ...settings?.preferredDuration, chanting: value }
        })
      );
    },
    [dispatch, settings]
  );

  const changeShavasanaHandler = useCallback(
    (value: string) => {
      dispatch(
        practiceSettingsActions.updatePracticeSettings({
          ...settings,
          preferredDuration: {
            ...settings?.preferredDuration,
            relaxation: value
          }
        })
      );
    },
    [dispatch, settings]
  );

  const submitHandler = useCallback(async () => {
    if (settings) {
      const res = await dispatch(getRandomClass(settings?.preferredDuration));
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
        {error && <Alert title={error.toString()} className="mb-20px" />}
        <ExerciseDurationSelect
          onChange={changeAsanaDurationHandler}
          selected={settings?.preferredDuration.asana.toString()}
        />
        <LevelSelect
          onChange={changeLevelHandler}
          selected={settings.difficultyLevel}
        />
        <PranoyamaSelect
          onChange={changePranoyamaHandler}
          selected={settings?.preferredDuration.pranayama.toString()}
        />
        <ChantingSelect
          onChange={changeChantingHandler}
          selected={settings?.preferredDuration.chanting.toString()}
        />
        <ShavasanaSelect
          onChange={changeShavasanaHandler}
          selected={settings?.preferredDuration.shavasana.toString()}
        />
        <VSpace />
        <Button onClick={submitHandler} disabled={loading}>
          Start
        </Button>
      </>
    )
  );
};
