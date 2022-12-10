import { useDispatch, useSelector } from "react-redux";
import Counter from "../Components/Counter";
import {
  add,
  min,
  changeDiff,
  addAmount,
  minAmount,
} from "../redux/modules/counterSlice";

const CounterContainer = () => {
  const num = useSelector((state) => state.counter.number);
  console.log(num);
  const diff = useSelector((state) => state.counter.diff);
  const dispatch = useDispatch();

  return (
    <Counter
      num={num}
      diff={diff}
      onChangeDiff={(diff) => {
        dispatch(changeDiff(diff));
      }}
      onAddAmount={() => {
        dispatch(addAmount());
      }}
      onMinAmount={() => {
        dispatch(minAmount());
      }}
      onAdd={() => {
        dispatch(add());
      }}
      onMin={() => {
        dispatch(min());
      }}
    ></Counter>
  );
};

export default CounterContainer;
