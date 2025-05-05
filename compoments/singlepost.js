import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // IMPORTANT: Replace with your WordPress URL
  const API_URL = 'http://your-local-site.local/wp-json/wp/v2/posts';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}?_embed`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to fetch post. Please try again later.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Loading post...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!post) return <div className="error">Post not found.</div>;

  // Get the featured image URL if available
  const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                          'https://via.placeholder.com/800x400?text=No+Image';

  return (
    <article className="single-post">
      <Link to="/" className="back-link">&larr; Back to all posts</Link>
      <h1>{post.title.rendered}</h1>
      <img src={featuredImageUrl} alt={post.title.rendered} className="featured-image" />
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}

export default SinglePost;