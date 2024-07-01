import { useState } from "react";
import { CREATE_USER, useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: CREATE_USER, payload: { username: name } });
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>
      <p className="m-6">Are you ready to order ! {name.toUpperCase()}</p>
      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className=" mt-6 rounded-full border border-gray-300 border-slate-500 bg-gray-50 bg-yellow-100 px-4 py-2"
      />

      {name !== "" && (
        <div>
          <button
            type="submit"
            className="mt-4 rounded-full bg-yellow-300 px-8 py-4"
          >
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
