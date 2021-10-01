import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
  const {id} = useParams();
  const {data:blog, pending, error} = useFetch('http://localhost:8000/blogs/' + id);
  console.log(blog);
  return (
    <div className="blog-details">
      <h2>Blog Details {id} </h2>
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <p>Written by: {blog.author}</p>
          </div>
      )}
    </div>
  );
}
 
export default BlogDetails;