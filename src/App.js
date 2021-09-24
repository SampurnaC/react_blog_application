import './App.css';
import BlogList from './components/BlogList';
import useFetch from './useFetch';

function App() {
  
  const {data:blogs, pending, error} = useFetch('http://localhost:8000/blogs');
  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default App;
