import './App.css';
import {useEffect, useState} from 'react';
import BlogList from './components/BlogList';

function App() {
  const[blogs, setBlogs] = useState(null)
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  
  useEffect(()=>{
    console.log("useeffect ran");
    setTimeout(()=> {
      fetch('http://localhost:8000/blogs')
        .then(res=> {
          if(!res.ok) {
            throw Error('cannot fetch data for the resource');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch((err)=> {
          setPending(false);
          setError(err.message);
        })
    }, 1000)
  },[])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}/>}
    </div>
  );
}

export default App;
