import HigherOrderFuntion from "../HigherOrderComponent";
const OnHoverCounter = ({ count, incrementCount }) => {
  return <h1 onMouseOver={incrementCount}>Count {count}</h1>;
};

export default HigherOrderFuntion(OnHoverCounter);
