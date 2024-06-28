import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = function () {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className=" mr-2 border border-gray-300 bg-gray-50 px-4 py-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #....."
      />
    </form>
  );
};
export default SearchOrder;
