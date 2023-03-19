import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

function GroupOfScientists({ title, scientists }) {
  const persons = scientists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <h2>{title}</h2>
      <ul>{persons}</ul>
    </>
  );
}

export default function List() {
  const chemists = people.filter(
    (chemist) => chemist.profession === "chemist"
  );
  const otherScientists = people.filter(
    (scientist) => !chemists.includes(scientist)
  );

  return (
    <article>
      <GroupOfScientists
        title="Chemists"
        scientists={chemists}
      />
      <GroupOfScientists
        title="Other Scientists"
        scientists={otherScientists}
      />
    </article>
  );
}
