import { FC, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  getProfileForm,
  getProfileReadonly,
  profileActions,
  updateProfileData
} from "@entities/profile";
import { cn } from "@shared/lib/classNames/classNames";
import { useAppDispatch } from "@shared/lib/storeHooks/storeHooks";
import { Button } from "@shared/ui/button/Button";

interface IProps {
  className?: string;
}

export const ProfilePageFooter: FC<IProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);
  const profile = useSelector(getProfileForm);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSave = useCallback(() => {
    profile && dispatch(updateProfileData(profile));
  }, [dispatch, profile]);

  return (
    <div className={cn("", {}, [className])}>
      {readonly ? (
        <Button onClick={onEdit}>edit</Button>
      ) : (
        <div className="flex justify-between">
          <Button onClick={onCancelEdit} theme="secondary">
            cancel
          </Button>
          <Button onClick={onSave}>save</Button>
        </div>
      )}
    </div>
  );
};
