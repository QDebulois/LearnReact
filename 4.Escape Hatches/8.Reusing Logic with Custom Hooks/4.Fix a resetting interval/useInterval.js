import { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

function useInterval(onTick, delay) {
  const onTickEvent = useEffectEvent(onTick);

  useEffect(() => {
    console.log("✅ Setting up an interval with delay ", delay);
    const id = setInterval(onTickEvent, delay);
    return () => {
      console.log("❌ Clearing an interval with delay ", delay);
      clearInterval(id);
    };
  }, [delay]);
}

export default useInterval;
