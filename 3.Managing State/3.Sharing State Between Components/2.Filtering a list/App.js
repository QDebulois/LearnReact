import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [resQuery, setResQuery] = useState(foods);

  function handleChange(e) {
    setResQuery(filterItems(foods, e.target.value));
  }

  return (
    <>
      <SearchBar onChange={handleChange} />
      <hr />
      <List items={resQuery} />
    </>
  );
}

function SearchBar({ onChange }) {
  return (
    <label>
      Search: <input onChange={(e) => handleChange(e)} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
