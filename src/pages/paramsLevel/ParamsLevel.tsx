import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppLayout } from "@app/AppLayout";
import { LevelRadio } from "@entities/levels";
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

const ParamsLevel = () => {
  const dispatch = useAppDispatch();
  const [currentParam, setCurrentParam] = useState<string | undefined>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProfileData())
      .unwrap()
      .then((res) => {
        setCurrentParam(res.params?.level);
      });
  }, [dispatch]);

  const profile = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const levelHandler = useCallback((value: string) => {
    setCurrentParam(value);
  }, []);

  const submitHandler = useCallback(() => {
    const newParams = { ...profile?.params };
    if (newParams && currentParam) {
      newParams.level = currentParam;
      dispatch(updateProfileData({ ...profile, params: newParams }))
        .unwrap()
        .then(() => {
          navigate(routePaths["params-step2"].URL());
        });
    }
  }, [profile, currentParam, dispatch, navigate]);

  if (isLoading) {
    return <Preloader text="Loading profile data" />;
  }

  return (
    <AppLayout valign="center">
      <H123 title="Let's choose your yoga level" align="center" />
      <TextLine align="center">
        Knowing your goal helps us tailor your experience
      </TextLine>
      <VSpace />
      {error && <Alert title={error.toString()} className="mb-2" />}
      <LevelRadio selected={profile?.params?.level} onChange={levelHandler} />
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </AppLayout>
  );
};

export default ParamsLevel;
