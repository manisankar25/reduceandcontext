import {useReducer} from 'react';
import Counter from './counterExample';
import { CounterContactProvider } from './contextConfig';
import CounterReducer from './counterReducer';


function App() {
   let initialState = { Counter: 0 }
    const [state, dispatch] = useReducer(CounterReducer, initialState)
  
  return (
    <CounterContactProvider initialState={initialState} reducer={CounterReducer}>
      <div className="App">
        <Counter></Counter>
      </div>
    </CounterContactProvider>
  );
}

export default App;
