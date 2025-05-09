import { useState, useEffect } from 'react';
import Header from './components/Header';
import React from 'react';
import YouTubeSidebar from './components/Sidebar';
import { videoData } from './data/videoData';
import MainContent from './components/MainContent';

const extractCategories = (videos) => {
  const categoriesSet = new Set(videos.map(video => video.category));
  return ["All", ...Array.from(categoriesSet)];
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = extractCategories(videoData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Perform search logic or API calls here
    console.log('Searching for:', term);
  };
  
  return (
    <div>
    <div className="app">
      <Header onSearchSubmit={handleSearch} />
      <main>
        {/* Your app content here */}
        {searchTerm && <p>Search results for: {searchTerm}</p>}
      </main>
    </div>
    <div className='d-flex'>
    <YouTubeSidebar categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}/>
    <MainContent searchTerm={searchTerm}  activeCategory={activeCategory}/>
    </div>
    </div>

  );
}

export default App;