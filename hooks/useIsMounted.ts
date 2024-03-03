import { useCallback, useEffect, useRef } from "react";

// Custom hook for determining if a component is currently mounted.
export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => {
    return isMounted.current;
  }, []);
}
