import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import TitleProvider from './components/TitleProvider';
import styles from './App.module.css';

const pageStyles = {
  display: "block",
  padding: 36,
}


const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const WorldNews = lazy(() => import('./pages/WorldNews'));

function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.mainLayout}>
            <header>
              <nav className={styles.nav}>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blog/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/world-news/">World News</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main style={pageStyles}>
              <Routes>
                <Route path="/" element={<TitleProvider title="Home"><Home/></TitleProvider>}/>
                <Route path="/blog/" element={<TitleProvider title="Blog"><Blog/></TitleProvider>}/>
                <Route path="/world-news/" element={<TitleProvider title="World News"><WorldNews/></TitleProvider>}/>
              </Routes>
            </main>
          </div>
        </Suspense>
      </Router>
  );
}

export default App;
