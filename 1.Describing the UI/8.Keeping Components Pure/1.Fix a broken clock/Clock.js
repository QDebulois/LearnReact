export default function Clock({ time }) {
  const hours = time.getHours();

  return (
    <h1 id="time" className={hours >= 0 && hours <= 6 ? "night" : "day"}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
