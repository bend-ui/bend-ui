import { useCycle } from "../useCycle";

export const useToggle = (initialValue = false) =>
  useCycle({
    initialValue,
    values: [true, false],
  });
