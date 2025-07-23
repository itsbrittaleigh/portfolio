import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home';
import SocialLinks from './components/social-links/SocialLinks';
import Header from './components/header/Header';
import About from './routes/about/About';
import Projects from './routes/projects/Projects';
import Project from './routes/project/Project';
import { ThemeProvider } from './ThemeContext';
import { GlobalStyle } from './GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/projects/:slug',
    element: <Project />
  }
]);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <RouterProvider router={router} />
        <SocialLinks />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
