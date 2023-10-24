import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ChantingSelect } from "@entities/chantingSelect";
import { ExerciseDurationSelect } from "@entities/exerciseDurationSelect";
import { LevelSelect } from "@entities/levelSelect";
import { PranoyamaSelect } from "@entities/pranoyamaSelect";
import { ShavasanaSelect } from "@entities/shavasanaSelect";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { VSpace } from "@shared/ui/vSpace/VSpace";

import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileActions
} from "@entities/profile";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { getRandomClass } from "../model/services/getRandomClass/getRandomClass";

export const StartClassForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profile = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const loading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const changeDurationHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfileData({
          ...profile,
          params: { ...profile?.params, exercise: value }
        })
      );
    },
    [dispatch, profile]
  );

  const changeLevelHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfileData({
          ...profile,
          params: { ...profile?.params, level: value }
        })
      );
    },
    [dispatch, profile]
  );

  const changePranoyamaHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfileData({
          ...profile,
          params: { ...profile?.params, breathing: value }
        })
      );
    },
    [dispatch, profile]
  );

  const changeChantingHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfileData({
          ...profile,
          params: { ...profile?.params, chanting: value }
        })
      );
    },
    [dispatch, profile]
  );

  const changeShavasanaHandler = useCallback(
    (value: string) => {
      dispatch(
        profileActions.updateProfileData({
          ...profile,
          params: { ...profile?.params, relaxation: value }
        })
      );
    },
    [dispatch, profile]
  );

  const submitHandler = useCallback(async () => {
    if (profile?.params) {
      const res = await dispatch(getRandomClass(profile?.params));
      if (
        res.meta.requestStatus === "fulfilled" &&
        typeof res.payload === "object"
      ) {
        navigate(routePaths.classDetail.URL(res.payload.id));
      }
    }
  }, [profile, dispatch, navigate]);

  if (loading) {
    return <Preloader text="Loading settings..." />;
  }

  return (
    profile && (
      <>
        {error && <Alert title={error.toString()} className="mb-20px" />}
        <ExerciseDurationSelect
          onChange={changeDurationHandler}
          selected={profile?.params?.exercise}
        />
        <LevelSelect
          onChange={changeLevelHandler}
          selected={profile.params?.level}
        />
        <PranoyamaSelect
          onChange={changePranoyamaHandler}
          selected={profile?.params?.breathing}
        />
        <ChantingSelect
          onChange={changeChantingHandler}
          selected={profile?.params?.chanting}
        />
        <ShavasanaSelect
          onChange={changeShavasanaHandler}
          selected={profile?.params?.relaxation}
        />
        <VSpace />
        <Button onClick={submitHandler} disabled={loading}>
          Start
        </Button>
      </>
    )
  );
};
