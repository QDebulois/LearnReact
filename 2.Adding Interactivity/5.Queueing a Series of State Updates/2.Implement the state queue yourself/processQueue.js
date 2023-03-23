export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let i = 0; i < queue.length; i++) {
    if (typeof queue[i] === "function") {
      finalState = queue[i](finalState);
    } else {
      finalState = queue[i];
    }
  }

  return finalState;
}
