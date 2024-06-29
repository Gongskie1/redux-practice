import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store";
import { decrement, increment, incrementedByAmount } from "../state/couter/counter.slice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementedByAmount(10))}>Increment</button>
        
      </div>
    </div>
  )
}

export default Counter