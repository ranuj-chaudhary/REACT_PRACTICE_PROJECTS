import HigherOrderFuntion from "../HigherOrderComponent";

const OnClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button onClick={incrementCount}>Increase Count</button>;<p>{count}</p>
    </div>
  );
};

export default HigherOrderFuntion(OnClickCounter);
