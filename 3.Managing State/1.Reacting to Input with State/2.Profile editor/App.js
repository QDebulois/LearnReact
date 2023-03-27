import { useState } from "react";

export default function EditProfile() {
  const [identity, setIdentity] = useState({
    firstName: "Jane",
    lastName: "Jacobs",
  });
  const [isModifying, setIsModifying] = useState(false);

  function handleOnChangeFirstName(e) {
    setIdentity({ ...identity, firstName: e.target.value });
  }

  function handleOnChangeLastName(e) {
    setIdentity({ ...identity, lastName: e.target.value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsModifying(!isModifying);
  }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <label>
        First name:
        {isModifying ?
          <input
            onChange={(e) => handleOnChangeFirstName(e)}
            value={identity.firstName}
          />
        :
          <b>{identity.firstName}</b>
        }
      </label>

      <label>
        Last name:
        {isModifying ?
          <input
            onChange={(e) => handleOnChangeLastName(e)}
            value={identity.lastName}
          />
        :
          <b>{identity.lastName}</b>
        }
      </label>

      <button type="submit">{isModifying ? "Save" : "Edit"} Profile</button>

      <p>
        <i>
          Hello, {identity.firstName} {identity.lastName} !
        </i>
      </p>
    </form>
  );
}
