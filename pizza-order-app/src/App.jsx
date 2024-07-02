import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import NotFound from "./ui/NotFound";
import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import { action as updateOrderAction } from "./features/order/CreateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "order/:orderId",
        element: <Order />,
        errorElement: <NotFound />,
        loader: orderLoader,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        errorElement: <NotFound />,
        action: updateOrderAction,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <NotFound />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
