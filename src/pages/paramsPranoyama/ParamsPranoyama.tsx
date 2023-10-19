import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import { PranoyamaRadio } from "@entities/pranoyamaSelect";
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

const ParamsPranoyama = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentParam, setCurrentParam] = useState<string | undefined>();

  useEffect(() => {
    dispatch(fetchProfileData())
      .unwrap()
      .then((res) => {
        setCurrentParam(res.params?.breathing);
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
      newParams.breathing = currentParam;
      dispatch(updateProfileData({ ...profile, params: newParams }))
        .unwrap()
        .then(() => {
          navigate(routePaths["params-step5"].URL());
        });
    }
  }, [profile, currentParam, dispatch, navigate]);

  if (isLoading) {
    return <Preloader text="Loading profile data" />;
  }

  return (
    <AppLayout valign="center">
      <H123 title="Add breathing exercises?" align="center" />
      <TextLine align="center">
        Breathing exercises teach you to control your emotions, concentrate and
        cope with anxiety, raise your awareness.
      </TextLine>
      <VSpace />
      {error && (
        <Alert title={error.toString()} type="error" className="m-10px" />
      )}
      <PranoyamaRadio
        selected={profile?.params?.breathing}
        onChange={durationHandler}
      />
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </AppLayout>
  );
};

export default ParamsPranoyama;
