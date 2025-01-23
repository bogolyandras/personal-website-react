import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TitleProvider from './components/TitleProvider';
import styles from './App.module.css';
import NavItem from "./components/NavItem";

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
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/blog/">Blog</NavItem>
                    <NavItem to="/world-news/">World News</NavItem>
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
