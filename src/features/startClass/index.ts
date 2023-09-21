import { getStartClassFormData } from "./model/selectors/getStartClassFormData/getStartClassFormData";
import {
  startClassActions,
  startClassReducer
} from "./model/slice/startClassSlice";
import { IStartClassSchema } from "./types/startClass";
import { StartClassForm } from "./ui/StartClassForm";

export {
  StartClassForm,
  getStartClassFormData,
  startClassActions,
  startClassReducer
};
export type { IStartClassSchema };
