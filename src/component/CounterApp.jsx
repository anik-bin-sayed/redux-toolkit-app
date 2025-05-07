import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increaseBy5,
  increment,
  reset,
} from "../app/features/counter/counterSlice";

const CounterApp = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseBy5(5))}>IncreaseBy5</button>
    </div>
  );
};

export default CounterApp;
