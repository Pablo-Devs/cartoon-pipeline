import { useQueryStates } from "nuqs";
import { storiesParams } from "../params";

export const useStoriesParams = () => {
  return useQueryStates(storiesParams);
};
