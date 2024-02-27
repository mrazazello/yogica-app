import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import { ExerciseDurationRadio } from "@entities/exerciseDurations";
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  updateProfileData
} from "@entities/profile";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";
import { useNavigate } from "react-router-dom";

const ParamsExerciseDuration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentParam, setCurrentParam] = useState<string | undefined>();

  useEffect(() => {
    dispatch(fetchProfileData())
      .unwrap()
      .then((res) => {
        setCurrentParam(res.params?.exercise);
      });
  }, [dispatch]);

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const durationHandler = useCallback((value: string) => {
    setCurrentParam(value);
  }, []);

  const submitHandler = useCallback(() => {
    const newParams = { ...profile?.params };
    if (newParams && currentParam) {
      newParams.exercise = currentParam;
      dispatch(updateProfileData({ ...profile, params: newParams }))
        .unwrap()
        .then(() => {
          navigate(routePaths["params-step3"].URL());
        });
    }
  }, [profile, currentParam, dispatch, navigate]);

  if (isLoading) {
    return <Preloader text="Loading profile data" />;
  }

  return (
    <AppLayout valign="center">
      <H123
        title="How long should be your comfortable physical exercise session?"
        align="center"
      />
      <TextLine align="center">Choose comfortable duration.</TextLine>
      <VSpace />
      {error && (
        <Alert title={error.toString()} type="error" className="m-10px" />
      )}
      <ExerciseDurationRadio
        selected={profile?.params?.exercise}
        onChange={durationHandler}
      />
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </AppLayout>
  );
};

export default ParamsExerciseDuration;
