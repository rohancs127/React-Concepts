import { useState } from 'react';

const ToggleExample = () => {
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
