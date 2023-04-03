import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";
import { useRef } from "react";

export default function Page() {
  const inputRef = useRef(null);

  function handleOnClickSearchButton() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton handleOnClick={handleOnClickSearchButton} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
