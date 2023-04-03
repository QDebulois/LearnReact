import { useState } from "react";
import useInterval from "./useInterval";

function useCounter(initialDelay) {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(initialDelay);

  useInterval(() => setCount((c) => c + 1), delay);
  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.body.style.backgroundColor = randomColor;
  }, delay);

  return [count, delay, setDelay];
}

export default useCounter;
