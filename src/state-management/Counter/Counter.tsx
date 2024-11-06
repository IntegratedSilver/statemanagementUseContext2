import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1 className="text-center">My Counter Component</h1>

      <div>
        <h1>Counter: {counter}</h1>
        <button className="btn btn-primary mx-3" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-primary mx-3" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
