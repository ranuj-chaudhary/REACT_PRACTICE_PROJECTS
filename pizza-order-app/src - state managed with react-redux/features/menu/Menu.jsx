import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="flex flex-col justify-center  bg-yellow-50">
      {menu.length > 0 &&
        menu.map((pizza, idx) => <MenuItem pizza={pizza} key={idx} />)}
    </ul>
  );
}

export async function Loader() {
  const data = await getMenu();

  return data;
}

export default Menu;
