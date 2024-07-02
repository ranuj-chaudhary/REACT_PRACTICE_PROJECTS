import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../store";
function CreateUser() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createUser(name));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>
      <p className="m-6">Are you ready to order ! {name.toUpperCase()}</p>
      <label htmlFor="username">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className=" mt-6 rounded-full border border-slate-500 bg-yellow-100 px-4 py-2"
          id="username"
        />
      </label>
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
