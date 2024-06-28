import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex flex-col text-center ">
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser  />
    </div>
  );
}

export default Home;
