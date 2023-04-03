import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const refCatsNodes = useRef(null);

  function createCatMap() {
    if (!refCatsNodes.current) {
      refCatsNodes.current = new Map();
    }
  }

  return (
    <>
      <nav>
        <button
          onClick={() => {
            let nextIndex;
            if (index < catList.length - 1) {
              nextIndex = index + 1;
            } else {
              nextIndex = 0;
            }
            setIndex(nextIndex);
            refCatsNodes.current.get(nextIndex).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              ref={(node) => {
                createCatMap();
                if (node) {
                  refCatsNodes.current.set(cat.id, node);
                } else {
                  refCatsNodes.current.delete(cat.id);
                }
              }}
              key={cat.id}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
