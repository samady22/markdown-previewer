import { UPDATE_MARKDOWN } from "../actionTypes";

export const updateAction = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown,
});
