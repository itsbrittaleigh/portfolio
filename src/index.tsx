import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home';
import SocialLinks from './components/social-links/SocialLinks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <SocialLinks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);