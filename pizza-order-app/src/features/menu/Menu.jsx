import { useLoaderData, useNavigation } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <ul>
      {menu.length > 0 &&
        menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.name} />)}
    </ul>
  );
}

export async function Loader() {
  const data = await getMenu();

  return data;
}

export default Menu;
