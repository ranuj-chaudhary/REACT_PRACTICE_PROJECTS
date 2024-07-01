import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

const Header = function () {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="flex items-center justify-between bg-yellow-500 p-4 font-medium text-blue-950">
      <div className="logo">
        <h2 className="font-mono text-2xl	tracking-wide ">
          {" "}
          Fast React Pizza Co.
        </h2>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="searchOrder ">
          <SearchOrder />
        </div>
        {username && (
          <div className="user">
            <p>Welcome, {username}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
