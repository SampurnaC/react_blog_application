import {useEffect, useState} from 'react';

const useFetch = (url) => {
  const[data, setData] = useState(null)
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    console.log("useeffect ran");
    setTimeout(()=> {
      fetch(url)
        .then(res=> {
          if(!res.ok) {
            throw Error('cannot fetch data for the resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err)=> {
          setPending(false);
          setError(err.message);
        })
    }, 1000)
  },[url])
  return {data, pending, error}
}
export default useFetch;
