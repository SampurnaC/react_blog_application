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
  console.log(blog)

  return (
    <div className="blog-details container">
      <h3>Blog Details </h3>
      {blog && (
        <div>
          <h1><u>{blog.title}</u></h1>
          <p>{blog.description}</p>
          <p>Written by: {blog.author}</p>
          <button onClick={deleteBlog}>Delete Blog</button>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;