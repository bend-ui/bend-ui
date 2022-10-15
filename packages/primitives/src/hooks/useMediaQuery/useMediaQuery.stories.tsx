import React from "react";
import { useMediaQuery } from "./useMediaQuery";

export default {
  title: "Hooks/useMediaQuery",
  component: useMediaQuery,
};

export const Base = () => {
  const [match, match2] = useMediaQuery([
    "(min-width: 576px)",
    "(min-width: 1576px)",
  ]);

  console.log(match);

  return (
    <>
      <span>Match "(min-width: 576px)" {match ? "yes" : "no"} </span>
      <span>Match "(min-width: 1576px)" {match2 ? "yes" : "no"} </span>
    </>
  );
};
