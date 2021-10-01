import { useParams } from "react-router";
import { Link } from "react-router-dom";

const BlogList = ({blogs, handleDelete}) => {
  return (
    <div className="blog-list">
      {blogs.map((blog)=>(
        <div className="blog" key={blog.title}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <h3>{blog.description}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;