import { FC } from "react";

import { Input } from "@shared/ui/Input/Input";
import { Alert } from "@shared/ui/alert/Alert";
import { Preloader } from "@shared/ui/preloader/Preloader";

import { IProfile } from "../model/types/profile";

interface IProps {
  data?: IProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
}

export const ProfileCard: FC<IProps> = (props) => {
  const {
    data,
    isLoading,
    error,
    readonly = false,
    onChangeFirstName,
    onChangeLastName
  } = props;

  if (error) {
    return <Alert title={error} type="error" />;
  }

  return (
    <>
      {isLoading ? (
        <Preloader text="loading profile 1" height="block" />
      ) : (
        <>
          <Input
            name="firstName"
            placeholder="First Name"
            required
            value={data?.firstName}
            onChange={onChangeFirstName}
            readonly={readonly}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            required
            value={data?.lastName}
            onChange={onChangeLastName}
            readonly={readonly}
          />
        </>
      )}
    </>
  );
};
