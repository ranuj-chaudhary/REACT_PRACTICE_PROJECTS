import { Outlet, useNavigation } from "react-router-dom";
import DataLoader from "./DataLoader";

const AppLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="layout">
      {navigation.state === "loading" && <DataLoader />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
