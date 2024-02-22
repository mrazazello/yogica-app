import {
  registrationActions,
  registrationReducer
} from "./model/slice/registrationSlice";
import { IRegistrationSchema } from "./model/types/registration";
import { RegistrationForm } from "./ui/RegistrationForm/RegistrationForm";

export { RegistrationForm, registrationActions, registrationReducer };
export type { IRegistrationSchema };
