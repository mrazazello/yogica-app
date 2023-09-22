import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ChantingSelect } from "@entities/chantingSelect";
import { DurationSelect } from "@entities/durationSelect";
import { LevelSelect } from "@entities/levelSelect";
import { PranoyamaSelect } from "@entities/pranoyamaSelect";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import { getStartClassError } from "../model/selectors/getStartClassError/getStartClassError";
import { getStartClassFormData } from "../model/selectors/getStartClassFormData/getStartClassFormData";
import { getStartClassLoading } from "../model/selectors/getStartClassLoading/getStartClassLoading";
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
  const navigate = useNavigate();

  const formData = useSelector(getStartClassFormData);
  const error = useSelector(getStartClassError);
  const loading = useSelector(getStartClassLoading);

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

  const submitHandler = useCallback(async () => {
    if (formData) {
      const res = await dispatch(getRandomClass(formData));
      if (
        res.meta.requestStatus === "fulfilled" &&
        typeof res.payload === "object"
      ) {
        navigate(routePaths.classDetail.URL(res.payload.id));
      }
    }
  }, [formData, dispatch, navigate]);

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
        <Button onClick={submitHandler} disabled={loading}>
          Start
        </Button>
      </>
    )
  );
};
