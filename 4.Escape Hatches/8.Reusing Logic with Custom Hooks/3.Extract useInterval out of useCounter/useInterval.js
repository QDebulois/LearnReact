import { useEffect } from "react";

function useInterval(onTick, delay) {
  useEffect(() => {
    const id = setInterval(onTick, delay)
    return () => clearInterval(id)
  }, [onTick, delay])
}

export default useInterval;
