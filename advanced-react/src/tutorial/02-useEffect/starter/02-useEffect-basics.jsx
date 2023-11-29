import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(()=>{
    console.log('this is use effect');
  },[])

  return (
    <div>
      <h1>value1 : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <h1>value2 : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
