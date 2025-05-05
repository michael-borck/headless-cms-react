import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  // Get the featured image URL if available
  const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                         'https://via.placeholder.com/300x200?text=No+Image';
  
  // Clean the excerpt (remove HTML tags)
  const excerpt = post.excerpt.rendered
    .replace(/<\/?[^>]+(>|$)/g, '')
    .trim();

  return (
    <div className="post-card">
      <img src={featuredImageUrl} alt={post.title.rendered} className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{post.title.rendered}</h2>
        <p className="post-excerpt">{excerpt}</p>
        <Link to={`/post/${post.id}`} className="read-more">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}

export default PostCard;