// ApiError — distinguishes between "WordPress not reachable" and other API errors.
// Use this instead of a raw <p className="error"> whenever a fetch fails.

function ApiError({ error, context = 'content' }) {
  const isNetworkError =
    error?.name === 'TypeError' || error?.message?.toLowerCase().includes('failed to fetch')

  const is404 = error?.message?.includes('404')

  if (isNetworkError) {
    return (
      <div className="api-error api-error--offline">
        <h2>WordPress is not connected</h2>
        <p>The React app cannot reach your WordPress backend.</p>
        <ul>
          <li>Check that LocalWP is running (green dot)</li>
          <li>Confirm <code>VITE_WP_API_URL</code> in your <code>.env</code> matches your LocalWP URL</li>
          <li>Try opening <code>{import.meta.env.VITE_WP_API_URL}</code> directly in your browser</li>
        </ul>
      </div>
    )
  }

  if (is404) {
    return (
      <div className="api-error api-error--missing">
        <h2>Content not found</h2>
        <p>The WordPress API returned a 404 for this {context}.</p>
        <ul>
          <li>If this is a Custom Post Type, check that <code>VITE_CPT_SLUG</code> matches what you registered in WordPress exactly</li>
          <li>If this is a page, check that the slug in the URL matches the page slug in WordPress</li>
          <li>Make sure the post type has REST API support enabled</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="api-error">
      <h2>Something went wrong</h2>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
    </div>
  )
}

export default ApiError
