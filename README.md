# Headless WordPress CMS with React

<!-- BADGES:START -->
[![api-integration](https://img.shields.io/badge/-api--integration-blue?style=flat-square)](https://github.com/topics/api-integration) [![blog-application](https://img.shields.io/badge/-blog--application-blue?style=flat-square)](https://github.com/topics/blog-application) [![content-management](https://img.shields.io/badge/-content--management-blue?style=flat-square)](https://github.com/topics/content-management) [![headless-cms](https://img.shields.io/badge/-headless--cms-blue?style=flat-square)](https://github.com/topics/headless-cms) [![javascript](https://img.shields.io/badge/-javascript-f7df1e?style=flat-square)](https://github.com/topics/javascript) [![react](https://img.shields.io/badge/-react-61dafb?style=flat-square)](https://github.com/topics/react) [![react-hooks](https://img.shields.io/badge/-react--hooks-blue?style=flat-square)](https://github.com/topics/react-hooks) [![react-router](https://img.shields.io/badge/-react--router-blue?style=flat-square)](https://github.com/topics/react-router) [![web-development](https://img.shields.io/badge/-web--development-blue?style=flat-square)](https://github.com/topics/web-development) [![wordpress-api](https://img.shields.io/badge/-wordpress--api-blue?style=flat-square)](https://github.com/topics/wordpress-api)
<!-- BADGES:END -->

A React-based blog application that builds on headless CMS concepts using components, hooks, and React Router with WordPress as the backend.

## Overview

This project demonstrates how to implement a headless CMS architecture using:
- **WordPress**: Backend content management system
- **React**: Frontend presentation layer
- **REST API**: Connection between the two systems

Building on the concepts from our vanilla JavaScript implementation, this project uses React's component-based architecture to create a more sophisticated frontend.

## Prerequisites

- [LocalWP](https://localwp.com/) with a WordPress site set up
- [Node.js](https://nodejs.org/) (v14 or higher) and npm installed
- Basic understanding of React concepts (components, props, hooks)
- Familiarity with the WordPress REST API

## Getting Started

### 1. WordPress Setup

Use your existing LocalWP WordPress site from the previous exercise, or create a new one:
1. Ensure you have at least 5 posts with:
   - Meaningful titles
   - Content with paragraphs and images
   - Featured images
   - Categories assigned

2. If you haven't already, enable CORS in WordPress:
   - Install a CORS plugin (search for "WP CORS")
   - Configure it to allow requests from `http://localhost:3000`

### 2. Clone and Setup React Project

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Open `src/App.js` and update the WordPress API URL to match your LocalWP site
4. Start the development server:
   ```
   npm start
   ```

### 3. Project Structure

This repository contains a scaffold of a React application:

- `src/App.js` - Main component with state variables
- `src/index.js` - React entry point
- `src/index.css` - Basic styling

### 4. Implementation Tasks

Your tasks for this project are:

1. **API Connection**: Complete the `useEffect` hook to fetch posts from WordPress
2. **Data Display**: Create the JSX to display posts from the API
3. **Styling**: Enhance the CSS to create an attractive blog layout
4. **Error Handling**: Implement loading states and error handling

### 5. Working with CORS

CORS (Cross-Origin Resource Sharing) is essential when your React app and WordPress are on different domains. Your React app running on localhost:3000 needs permission to access your WordPress API.

If you encounter CORS errors:
1. Check that your CORS plugin is active in WordPress
2. Verify settings allow requests from http://localhost:3000
3. For testing purposes only, you can allow all origins with "*"

## Understanding React with Headless CMS

As you implement this project, consider:

- How does React's component model benefit a headless CMS implementation?
- What advantages does using hooks (useState, useEffect) provide?
- How could this approach be extended for a larger application?
- What are the similarities and differences compared to the vanilla JS implementation?

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [React CORS Guide](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## Extension Challenges

After completing the basic implementation, try these enhancements:

1. Add React Router to create a multi-page experience
2. Create a detail view component for individual posts
3. Implement category filtering
4. Add a search component

## Submission

Submit your completed project including:
1. Working React code
2. Screenshots of your application
3. Brief reflection comparing React and vanilla JS approaches to headless CMS
