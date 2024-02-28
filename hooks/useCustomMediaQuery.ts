import { useMemo } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import { useMediaQuery } from "usehooks-ts";
import tailwindConfig from "../tailwind.config";

export interface CustomMediaQuery {
  isSm: boolean;
  isMdAndAbove: boolean;
  isLgAndAbove: boolean;
  isXlAndAbove: boolean;
  is2XlAndAbove: boolean;
}

export function useCustomMediaQuery(): CustomMediaQuery {
  const { screens } = resolveConfig(tailwindConfig).theme;

  const isMdAndAbove = useMediaQuery(`(min-width: ${screens.md})`);

  const isLgAndAbove = useMediaQuery(`(min-width: ${screens.lg})`);

  const isXlAndAbove = useMediaQuery(`(min-width: ${screens.xl})`);

  const is2XlAndAbove = useMediaQuery(`(min-width: ${screens["2xl"]})`);

  const customMediaQueryObject = {
    isSm: [is2XlAndAbove, isXlAndAbove, isLgAndAbove, isMdAndAbove].every(
      (flag) => flag === false
    ),
    isMdAndAbove,
    isLgAndAbove,
    isXlAndAbove,
    is2XlAndAbove,
  };

  // Create a dependency key, from all the flags in the media query object.
  const dependencyArrayKey = Object.entries(customMediaQueryObject).reduce(
    (accumulator, [key, value]) => `${accumulator}[${key}:${value}]`,
    ""
  );

  // Memoize the media query object using the key.
  const memoizedMediaQueryObject = useMemo(() => {
    return customMediaQueryObject;
    // eslint-disable-next-line
  }, [dependencyArrayKey]);

  // Return the memoized object.
  return memoizedMediaQueryObject;
}
