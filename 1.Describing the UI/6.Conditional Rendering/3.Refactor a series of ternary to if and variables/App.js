const drinks = {
  tea: {
    part: "leaf",
    caffeine: "15–70",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    caffeine: "80–185",
    age: "1,000+ years",
  },
};

function Drink({ name }) {
  let drinkName = name.trim().toLowerCase();

  if (Object.keys(drinks).includes(drinkName)) {
    return (
      <section>
        <h1>{drinkName}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{drinks[drinkName].part}</dd>
          <dt>Caffeine content</dt>
          <dd>{drinks[drinkName].caffeine} mg/cup</dd>
          <dt>Age</dt>
          <dd>{drinks[drinkName].age} years</dd>
        </dl>
      </section>
    );
  }

  return (
    <section>
      <h1>{drinkName}</h1>
      Content of this drink is not known for the moment.
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
      <Drink name="ice-tea" />
    </div>
  );
}
