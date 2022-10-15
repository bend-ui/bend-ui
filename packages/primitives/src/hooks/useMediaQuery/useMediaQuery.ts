import { useEffect, useState } from "react";

export const useMediaQuery = (query: string | string[]) => {
  const queries = Array.isArray(query) ? query : [query];

  const [matches] = useState(
    queries.map((query) => window.matchMedia(query).matches)
  );

  useEffect(() => {
    console.log("useMediaQuery");
  }, [query]);

  return matches;
};
