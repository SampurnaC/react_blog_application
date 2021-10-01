import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id);
  const history=useHistory();

  const deleteBlog=()=>{
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: "DELETE"
    }).then(()=>{
      history.push('/');
    })
  }
  return (
    <div className="blog-details">
      <h2>Blog Details {id} </h2>
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <p>Written by: {blog.author}</p>
          <button onClick={deleteBlog}>Delete Blog</button>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;