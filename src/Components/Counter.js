const Counter = ({
  num,
  diff,
  onAdd,
  onMin,
  onChangeDiff,
  onAddAmount,
  onMinAmount,
}) => {
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onAdd}>+1</button>
      <button onClick={onMin}>-1</button>
      <input
        type="number"
        value={diff}
        onChange={(e) => onChangeDiff(e.target.value)}
      />
      <button onClick={onAddAmount}>AmountAdd</button>
      <button onClick={onMinAmount}>AmountMin</button>
    </div>
  );
};

export default Counter;
