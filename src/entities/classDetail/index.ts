import { getClassDetailData } from "./model/selectors/getClassDetailData/getClassDetailData";
import { getClassDetailError } from "./model/selectors/getClassDetailError/getClassDetailError";
import { getClassDetailLoading } from "./model/selectors/getClassDetailLoading/getClassDetailLoading";
import { fetchClassDetailData } from "./model/services/fetchClassDetailData/fetchClassDetailData";
import {
  classDetailActions,
  classDetailReducer
} from "./model/slice/classDetailSlice";
import { IClassDetail, IClassDetailSchema } from "./model/types/class";
import { ClassDetail } from "./ui/ClassDetail";

export {
  ClassDetail,
  classDetailActions,
  classDetailReducer,
  fetchClassDetailData,
  getClassDetailData,
  getClassDetailError,
  getClassDetailLoading
};
export type { IClassDetail, IClassDetailSchema };
