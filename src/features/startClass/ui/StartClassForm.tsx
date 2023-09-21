import { ChantingSelect } from "@entities/chantingSelect";
import { DurationSelect } from "@entities/durationSelect";
import { LevelSelect } from "@entities/levelSelect";
import { PranoyamaSelect } from "@entities/pranoyamaSelect";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Button } from "@shared/ui/button/Button";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import { Alert } from "@shared/ui/alert/Alert";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getStartClassFormData } from "..";
import { getStartClassError } from "../model/selectors/getStartClassError/getStartClassError";
import { getRandomClass } from "../model/services/getRandomClass/getRandomClass";
import { startClassActions } from "../model/slice/startClassSlice";
import { IStartClassForm } from "../types/startClass";

const initialParams: IStartClassForm = {
  exercisesDuration: "15",
  level: "beginner",
  pranoyamaDuration: "0",
  chantingDuration: "0",
  shavasanaDuration: "yes"
};

export const StartClassForm = () => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getStartClassFormData);
  const error = useSelector(getStartClassError);

  useEffect(() => {
    dispatch(startClassActions.updateFormData(initialParams));
  }, [dispatch]);

  const changeDurationHandler = useCallback(
    (value: string) => {
      dispatch(startClassActions.updateFormData({ exercisesDuration: value }));
    },
    [dispatch]
  );

  const changeLevelHandler = useCallback(
    (value: string) => {
      dispatch(startClassActions.updateFormData({ level: value }));
    },
    [dispatch]
  );

  const changePranoyamaHandler = useCallback(
    (value: string) => {
      dispatch(startClassActions.updateFormData({ pranoyamaDuration: value }));
    },
    [dispatch]
  );

  const changeChantingHandler = useCallback(
    (value: string) => {
      dispatch(startClassActions.updateFormData({ chantingDuration: value }));
    },
    [dispatch]
  );

  const changeShavasanaHandler = useCallback(
    (value: string) => {
      dispatch(startClassActions.updateFormData({ shavasanaDuration: value }));
    },
    [dispatch]
  );

  const submitHandler = () => {
    console.log(formData);
    formData && dispatch(getRandomClass(formData));
  };

  return (
    formData && (
      <>
        {error && <Alert title={error} className="mb-20px" />}
        <DurationSelect
          onChange={changeDurationHandler}
          selected={formData.exercisesDuration}
        />
        <LevelSelect onChange={changeLevelHandler} selected={formData.level} />
        <PranoyamaSelect
          onChange={changePranoyamaHandler}
          selected={formData.pranoyamaDuration}
        />
        <ChantingSelect
          onChange={changeChantingHandler}
          selected={formData.chantingDuration}
        />
        <ShavasanaSelect
          onChange={changeShavasanaHandler}
          selected={formData.shavasanaDuration}
        />
        <VSpace />
        <Button text="Start" onClick={submitHandler} />
      </>
    )
  );
};
