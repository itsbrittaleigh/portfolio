import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>😐 Uh oh.</h1>
    <p>Looks like I can't find the project you're trying to view.</p>
    <Link to={`/projects`}>&larr; Go back to projects</Link>
  </>
);

export default NotFound;
