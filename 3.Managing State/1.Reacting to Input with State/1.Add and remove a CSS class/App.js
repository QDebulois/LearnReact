import { useState } from "react";

export default function Picture() {
  const [isBgActive, setIsBgActive] = useState(true);

  function handleChange(e, origin) {
    e.stopPropagation();
    if (origin === "img") {
      setIsBgActive(false);
    } else if (origin === "bg") {
      setIsBgActive(true);
    }
  }

  return (
    <div
      className={`background ${isBgActive && "background--active"}`}
      onClick={(e) => handleChange(e, "bg")}
    >
      <img
        onClick={(e) => handleChange(e, "img")}
        className={`picture ${!isBgActive && "picture--active"}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
