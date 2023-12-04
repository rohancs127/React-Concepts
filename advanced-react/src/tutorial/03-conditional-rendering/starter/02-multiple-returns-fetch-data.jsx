import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [user, setUser] = useState({})

  useEffect(()=>{
    const fetchData = async()=>{
      const response  = await fetch(url);
      const user = await response.json()
      console.log(user);
      setUser(user)
    }

    fetchData();
  },[])

  return <section>
    <h2>Fetch Data </h2>
    <img src={user.avatar_url} style={{height:'10rem', borderRadius:'1.5rem'}}></img>
    <h2>{user.login}</h2>
    <h4>Works at {user.company}</h4>
    <h5>{user.bio}</h5>
  </section>;
};
export default MultipleReturnsFetchData;
