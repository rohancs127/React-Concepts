import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      //fetching done
      setIsLoading(false);
    }, 3000)
  }, [])

  if(isLoading){
    return <section>
      <h1>Loading....</h1>
    </section>
  }
  return <section>
    <h2>Multiple Returns Basics</h2>
  </section>;
};
export default MultipleReturnsBasics;
