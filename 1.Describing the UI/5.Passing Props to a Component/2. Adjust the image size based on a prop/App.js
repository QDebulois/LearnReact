import { getImageUrl } from "./utils.js";

function Avatar({ person, size }) {
  const imgurSize = size < 90 ? "s" : "b";
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imgurSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}
