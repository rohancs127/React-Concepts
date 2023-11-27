import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    // setCount(count+1)
    setTimeout(()=>{
      setCount((currentState)=>{
      const newState  = currentState+1;
      return newState;
    })
  }, 3000)
    // console.log(count);
  }
  return (
    <section>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>Click me</button>
    </section>
    
  )
};

export default UseStateGotcha;
