// import { useReducer, useState } from "react";
// import counterReducer from "./counterReducer";
import userCounterStore from "./store";

const Counter = () => {

// Declare state variable 'count' with initial value 0
// const [count, setCount] = useState<number>(0);

// this is from counterReducer
// const [count, dispatch] = useReducer(counterReducer, 0)

const {counter, increment,decrement, reset} = userCounterStore()


// // Function to handle increment
// const increment = () => {
//   dispatch({type: 'INCREMENT'})
// };

// // Function to handle decrement
// const decrement = () => {
//   dispatch ({type: 'DECREMENT'})
// };

// // Function to reset the count to 0
// const reset = () => {
//   dispatch ({type: 'RESET'})
// };


  return (
    <div>

    <h1 className="text-center">My Counter Component</h1>

 <div>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
      <button className="btn btn-primary mx-3" onClick={decrement}>Decrement</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default Counter