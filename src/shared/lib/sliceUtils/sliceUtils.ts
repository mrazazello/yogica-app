import { AnyAction } from "@reduxjs/toolkit";

export function isThunkActionError(action: AnyAction): boolean {
  return action.type.endsWith("rejected");
}
