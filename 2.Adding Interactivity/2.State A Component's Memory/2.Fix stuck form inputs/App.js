import { useState } from "react";

export default function Form() {
  const [identity, setIdentity] = useState({
    firstName: "",
    lastName: "",
  });

  function handleFirstNameChange(e) {
    setIdentity({
      ...identity,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setIdentity({
      ...identity,
      lastName: e.target.value,
    });
  }

  function handleReset() {
    setIdentity({
      firstName: "",
      lastName: "",
    });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={identity.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={identity.lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {identity.firstName} {identity.lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
