import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  updateProfileData
} from "@entities/profile";
import { ShavasanaRadio } from "@entities/shavasanaSelect";
import { routePaths } from "@shared/config/router/routes";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";
import { useNavigate } from "react-router-dom";

const ParamsShavasana = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentParam, setCurrentParam] = useState<string | undefined>();

  useEffect(() => {
    dispatch(fetchProfileData())
      .unwrap()
      .then((res) => {
        setCurrentParam(res.params?.relaxation);
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
      newParams.relaxation = currentParam;
      dispatch(updateProfileData({ ...profile, params: newParams }))
        .unwrap()
        .then(() => {
          navigate(routePaths.main.URL());
        });
    }
  }, [profile, currentParam, dispatch, navigate]);

  if (isLoading) {
    return <Preloader text="Loading profile data" />;
  }

  return (
    <AppLayout valign="center">
      <H123
        title="Add a relaxing guided meditations and healing with the sound?"
        align="center"
      />
      <TextLine align="center">
        Musical Savasana, Yoga Nidra (yogic sleep), sound therapy and Sound Bath
        ,using numerous soundhealing music instruments and vocal.
      </TextLine>
      <VSpace />
      {error && (
        <Alert title={error.toString()} type="error" className="m-10px" />
      )}
      <ShavasanaRadio
        selected={profile?.params?.relaxation}
        onChange={durationHandler}
      />
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </AppLayout>
  );
};

export default ParamsShavasana;
