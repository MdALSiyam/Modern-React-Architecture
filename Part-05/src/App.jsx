import { useState, useEffect } from 'react';

export default function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <h3>Loading posts...</h3>;

  return (
    <div>
      <h2>Level 5: Fetching Data with useEffect</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}