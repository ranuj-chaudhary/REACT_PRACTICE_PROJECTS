
import { useSelector } from "react-redux";
import store from "../store";

function TestStore() {
    const value = useSelector(state => state.user.username)
    console.log(value);
  return <h1>test store</h1>;
}

export default TestStore;
