import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  let [count, setCount] = useState(0);
  const incrementCount=()=>{
    setCount(count+1)
  }
  return (
    <section>
      <h1>useState Basics</h1>
      <div>{count}</div>
      <button className="btn" onClick={incrementCount}>Add</button>
    </section>
  );
};

export default UseStateBasics;
