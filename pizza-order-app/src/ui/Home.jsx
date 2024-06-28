import { useAsyncValue, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menu");
  }
  return (
    <div className="flex flex-col text-center ">
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <button onClick={handleClick}>Order Now</button>
    </div>
  );
}

export default Home;
