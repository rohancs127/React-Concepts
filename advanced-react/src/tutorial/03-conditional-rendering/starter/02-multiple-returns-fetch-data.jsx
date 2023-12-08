import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchData = async()=>{
      try
      {
        const response  = await fetch(url);

        if(!response.ok){
          setIsError(true);
          setIsLoading(false);
          return;
        }
        
      const user = await response.json()
      console.log(user);
      setUser(user)
    }
    catch(error){
      console.log(error);
      setIsError(true)
    }

    setIsLoading(false);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
    }



    fetchData();

  },[])

  if(isLoading){
    return <h1>Loading.....</h1>
  }

  if(isError) {
    return <h1>Error!! Unable to load</h1>
  }

  return <section>
    <h2>Fetch Data </h2>
    <img src={user.avatar_url} style={{height:'10rem', borderRadius:'1.5rem'}}></img>
    <h2>{user.login}</h2>
    <h4>Works at {user.company}</h4>
    <h5>{user.bio}</h5>
  </section>;
};
export default MultipleReturnsFetchData;
