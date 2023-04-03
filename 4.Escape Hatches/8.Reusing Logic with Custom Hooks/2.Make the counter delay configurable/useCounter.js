import { useState, useEffect } from "react";

export function useCounter(initialDelay) {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(initialDelay);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay]);

  return [count, delay, setDelay];
}
