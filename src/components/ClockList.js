import Clock from "./Clock";

function ClockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map((quantity) => (
        <Clock key={quantity} />
      ))}
    </div>
  );
}

export default ClockList;
