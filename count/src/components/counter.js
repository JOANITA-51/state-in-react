import {useState} from 'react'

const Counter = () => {
    const [count , setCount] = useState(20);

    const increment = () => {
        setCount((prevAge)=>prevAge = prevAge + 1)
    }
    return (
        <div>
            <h3>Anita is {count} years old</h3>
            <button onClick={increment}> + </button>
            
        </div>
    )
}

export default Counter;
