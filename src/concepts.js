import './App.css';
import { useState, useEffect } from 'react';

// const Person =(props)=>{
//   return(
//     <>
//       <h1>Name:{props.name}</h1>
//       <h2>Last Name:{props.lastname}</h2>
//       <h2>Age:{props.Age}</h2>
//     </>
//   )
// }

const App = ()=> {
  const [count , setCount] = useState(0)

  useEffect(()=>{
    setCount(100)
  },[])
  return (
    <div className="App">
      {/* <Person name = 'Joanita' lastname = 'Nakityo' Age = {20+3}/>
      <Person name = 'Agatha' lastname = 'Namuwolya' Age = {20+3}/>
      <Person/> */}
      <button onClick={()=>setCount((prevCount)=>prevCount-1)}>-</button>
      <h2>{count}</h2>
      <button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
