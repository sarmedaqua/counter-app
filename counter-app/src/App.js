import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, } from "./actions/index.js";

function App() {

  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        React & Redux Proj
      </h1>
      <h3>Counter App</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
