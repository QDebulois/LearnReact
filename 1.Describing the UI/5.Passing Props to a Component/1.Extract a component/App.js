import { getImageUrl } from "./utils.js";

function Profile({ name, imageUrl, profession, awards, discovered }) {
  return (
    <section key={name} className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: 4 </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      imageUrl: "szV5sdG",
      profession: "physicist and chemist",
      awards:
        "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
      discovered: "polonium (element)",
    },
    {
      name: "Katsuko Saruhashi",
      imageUrl: "YfeOqp2",
      profession: "geochemist",
      awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
      discovered: "a method for measuring carbon dioxide in seawater",
    },
  ];

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist) => Profile(scientist))}
    </div>
  );
}
