import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { AppLayout } from "@app/AppLayout";
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions
} from "@entities/profile";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { ProfilePageFooter } from "./ProfilePageFooter";

const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ firstName: value }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfileData({ lastName: value }));
    },
    [dispatch]
  );

  return (
    <AppLayout title="Profile">
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
      />
      <ProfilePageFooter />
    </AppLayout>
  );
};

export default Profile;
