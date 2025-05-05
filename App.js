import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // REPLACE WITH YOUR WORDPRESS URL
  const WP_API_URL = 'http://your-local-site.local/wp-json/wp/v2/posts';
  
  useEffect(() => {
    // Fetch posts from WordPress
    // Your code here
  }, []);
  
  return (
    <div className="App">
      <header>
        <h1>React Headless CMS Demo</h1>
      </header>
      
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="posts-container">
            {/* Display posts here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;