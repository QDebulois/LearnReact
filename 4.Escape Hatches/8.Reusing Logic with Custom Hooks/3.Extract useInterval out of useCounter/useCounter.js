import { useState, useEffect } from "react";
import useInterval from "./useInterval";

export function useCounter(initialDelay) {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(initialDelay);

  useInterval(() => setCount((c) => c + 1), delay);

  return [count, delay, setDelay];
}
