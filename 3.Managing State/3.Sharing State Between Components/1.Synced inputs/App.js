import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" text={text} onChange={handleChange} />
      <Input label="Second input" text={text} onChange={handleChange} />
    </>
  );
}

function Input({ label, text, onChange }) {
  return (
    <label>
      {label} <input value={text} onChange={onChange} />
    </label>
  );
}
