import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, seTtext] = useState('');
  const [name, setName] = useState('Rohan');

  

  return (
  <section>
  <h2>short circuit overview</h2>
  <h1>{text || 'Hello'}</h1>
  <h2>{name || 'Anonymous'}</h2>
  </section>
  );
};
export default ShortCircuitOverview;
