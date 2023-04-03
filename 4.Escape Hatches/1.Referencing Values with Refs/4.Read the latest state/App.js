import { useState, useRef } from "react";

export default function Chat() {
  const refText = useRef("");
  const [text, setText] = useState("");

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + refText.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          refText.current = e.target.value;
          setText(e.target.value);
        }}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
