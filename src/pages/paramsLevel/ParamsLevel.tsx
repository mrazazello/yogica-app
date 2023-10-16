import { useEffect } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import { LevelRadio } from "@entities/levelSelect";
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading
} from "@entities/profile";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Alert } from "@shared/ui/alert/Alert";
import { Button } from "@shared/ui/button/Button";
import { H123 } from "@shared/ui/h123/H123";
import { Preloader } from "@shared/ui/preloader/Preloader";
import { TextLine } from "@shared/ui/text/TextLine";
import { VSpace } from "@shared/ui/vSpace/VSpace";

const ParamsLevel = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const profileLevel = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const levelHandler = (value: string) => {
    console.log("change: ", value);
  };

  const submitHandler = () => {
    console.log("submit");
  };

  if (isLoading) {
    return <Preloader text="Loading profile data" />;
  }

  if (error) {
    return <Alert title={error} type="error" className="m-10px" />;
  }

  return (
    <AppLayout valign="center">
      <H123 title="Let's choose your yoga level" align="center" />
      <TextLine align="center">
        Knowing your goal helps us tailor your experience
      </TextLine>
      <VSpace />
      <LevelRadio
        selected={profileLevel?.params?.level}
        onChange={levelHandler}
      />
      <VSpace />
      <Button onClick={submitHandler}>Continue</Button>
    </AppLayout>
  );
};

export default ParamsLevel;
