import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1)
  }
  return (
    <section>
      <h2>useState "gotcha"</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>Click me</button>
    </section>
    
  )
};

export default UseStateGotcha;
