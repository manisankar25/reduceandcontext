import { useReducer } from "react";
import CounterReducer from "./counterReducer";

function Counter() {
    let intailState = { Counter: 0 }
    const [state, dispatch] = useReducer(CounterReducer, intailState)

    return (<div>
        <h1>Counter: {state.Counter} </h1>
        <button onClick={() => dispatch('INCRE')}>Increment</button>
        <button onClick={() => dispatch('DECRE')}>Decrement</button>

    </div>)

}
export default Counter;