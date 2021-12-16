import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from 'react/cjs/react.development';


const BlogList = ({blogs, handleDelete}) => {
  const[searchItem, setSearchItem] = useState('');
  return (
    <div className="blog-list">
      <input class="form-control-sm" type="text" placeholder="Search..." value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} aria-label="Search"/>
      {blogs.filter((val)=>{
        if (searchItem==""){
          return val;
        }
        else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) {
          return val;
        }
      }).map((blog)=>(
        <div className="blog" key={blog.title}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>
          <hr />
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;