import './App.css';
import {useEffect, useState} from 'react';
import BlogList from './components/BlogList';

function App() {
  const[blogs, setBlog] = useState([
    {title: "title1 title", description: "title1 description", id: 1},
    {title: "title2 title", description: "title2 description", id: 2},
    {title: "title3 title", description: "title3 description", id: 3}

  ])

  const [name, setName] = useState('Hari');

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog => blog.id !== id)
    setBlog(newBlogs)
  }
  
  useEffect(()=>{
    console.log("useeffect ran");

  },[name])

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete}/>
      {name}
      <button onClick={()=> setName('Sita')}>Change Name</button>
    </div>
  );
}

export default App;
