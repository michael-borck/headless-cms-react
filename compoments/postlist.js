import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // IMPORTANT: Replace with your WordPress URL
  const API_URL = 'http://your-local-site.local/wp-json/wp/v2/posts';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}?_embed&per_page=6`);
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="post-list">
      <h2>Latest Posts</h2>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
}

export default PostList;