import { getClassDetailData } from "./model/selectors/getClassDetailData/getClassDetailData";
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
  getClassDetailData
};
export type { IClassDetail, IClassDetailSchema };
