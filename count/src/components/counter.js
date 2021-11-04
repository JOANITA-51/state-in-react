import {useState} from 'react'
import CounterDisplay from './CounterDisplay';

const Counter = () => {
    const [count , setCount] = useState(20);

    const increment = () => {
        setCount((prevAge)=>prevAge = prevAge + 1)
    }
    return (
        <div>
            
            <button onClick={increment}> + </button>
            <CounterDisplay c={count}/>
        </div>
    )
}

export default Counter;
