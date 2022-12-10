import Counter from "../Components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/modules/counter";

const CounterContainer = () => {
  const num = useSelector((state) => state.counter.num);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };

  return <Counter num={num} onIncrease={onIncrease} onDecrease={onDecrease} />;
};

export default CounterContainer;
