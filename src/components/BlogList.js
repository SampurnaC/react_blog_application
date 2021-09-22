const BlogList = ({blogs, handleDelete}) => {
  return (
    <div className="blog-list">
      {blogs.map((blog)=>(
        <div className="blog" key={blog.title}>
          <h1>{blog.title}</h1>
          <h3>{blog.description}</h3>
          <button onClick={()=> handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;