import { useCallback, useEffect, useRef, useState } from "react";
import { useIsMounted } from ".";

interface UseLoadingSimulationProps {
  // Determines whether the simulation is 'ON' or 'OFF'.
  on?: boolean;

  // Total time or duration of the simulation in 'ms'.
  time?: number;
}

// Custom hook for simulating loading behaviour inside a component.
export function useLoadingSimulation({
  on = true, // Default state is 'ON'.
  time = 3000, // Default time is '3s'.
}: UseLoadingSimulationProps = {}) {
  const isMounted = useIsMounted();
  const isSimulationRunning = useRef(false);
  const [isLoading, setIsLoading] = useState(on);

  useEffect(() => {
    if (on) {
      setIsLoading(true);
      return;
    }

    if (!on && !isSimulationRunning.current) {
      setIsLoading(false);
    }
  }, [on]);

  useEffect(() => {
    isSimulationRunning.current = true;
    const timeoutId = setTimeout(() => {
      isSimulationRunning.current = false;
      if (isMounted()) {
        setIsLoading(false);
      }
    }, time);

    if (!isLoading) {
      isSimulationRunning.current = false;
      clearTimeout(timeoutId);
      return;
    }

    return () => {
      isSimulationRunning.current = false;
      clearTimeout(timeoutId);
    };
  }, [time, isMounted, isLoading]);

  return {
    isLoading,
    isRunning: useCallback(() => {
      return isSimulationRunning.current;
    }, []),
  };
}
