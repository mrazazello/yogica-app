import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "./model/services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { IProfileSchema } from "./model/types/profile";
import { ProfileCard } from "./ui/ProfileCard";

export {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
  updateProfileData
};

export type { IProfileSchema };
