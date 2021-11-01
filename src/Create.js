import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const history = useHistory();
  const createBlog=(e)=>{
    e.preventDefault();
    const blog={title, description};
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added");
      history.push('/');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={createBlog}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Body:</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label>Blog Author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="Sampurna">Sampurna</option>
          <option value="Santosh">Santosh</option>
        </select>
        <button>Create Blog</button>
      </form>
      {title}
      {description}
      {author}
    </div>
  );
}
 
export default Create;