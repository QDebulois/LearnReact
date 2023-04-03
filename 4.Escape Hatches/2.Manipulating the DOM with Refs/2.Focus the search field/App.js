import { useRef } from "react";

export default function Page() {
  const refInput = useRef(null);

  return (
    <>
      <nav>
        <button onClick={() => refInput.current.focus()}>Search</button>
      </nav>
      <input ref={refInput} placeholder="Looking for something?" />
    </>
  );
}
