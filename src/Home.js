
import useFetch from './useFetch';
import BlogList from './BlogList';

const Home = () => {
  const {data:blogs, pending, error} = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home container">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;