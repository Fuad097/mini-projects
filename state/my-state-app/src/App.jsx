import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import UserList from "./Userlist";
import Routes from "react-redux";

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <UserList />
      </div>
      <Switch>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Switch>
      <div>
        <div>{value}</div>
        <button onClick={() => dispatch(increment())}>Artir</button>
        <button onClick={() => dispatch(decrement())}>azalt</button>
      </div>
    </>
  );
}

export default App;
