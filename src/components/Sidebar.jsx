import { useState } from 'react';

export default function YouTubeSidebar({ categories, activeCategory, setActiveCategory }) {
  const mainMenuItems = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "⚡", label: "Shorts", active: false },
    { icon: "📺", label: "Subscriptions", active: false }
  ];
  
  const categoryItems = [
    { label: "All", active: true },
    { label: "Comedy", active: false },
    { label: "Action", active: false },
    { label: "Sports", active: false },
    { label: "Music", active: false },
    { label: "Technology", active: false },
    { label: "Education", active: false },
    { label: "Entertainment", active: false },
    { label: "News", active: false }
  ];

  const [activeMainItem, setActiveMainItem] = useState(mainMenuItems.findIndex(item => item.active));

  const handleMainItemClick = (index) => {
    setActiveMainItem(index);
  };

  const handleCategoryItemClick = (Category) => {
    setActiveCategory(Category);
  };

  return (
    <div className="fixed top-14 left-0 w-56 h-[calc(100vh-60px)] overflow-y-auto bg-black text-white p-3 border-r border-gray-800 pb-6">
      <div className="mb-4">
        {mainMenuItems.map((item, index) => (
          <div 
            key={item.label}
            className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors
              ${activeMainItem === index ? 'bg-gray-800' : 'hover:bg-gray-800/50'}`}
            onClick={() => handleMainItemClick(index)}
          >
            <div className="text-sm mr-4">{item.icon}</div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
      
      <div className="h-px bg-gray-700 my-2"></div>

      <div className="mb-2">
        <div className="px-3 py-1 text-xs text-gray-400 font-medium">Categories</div>
        {categories.map((category) => (
          <div
            key={category}
            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm
              ${activeCategory === category ? 'bg-gray-800' : 'hover:bg-gray-800/50'}`}
            onClick={() => handleCategoryItemClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-2 left-0 right-0 px-4 text-xs text-gray-500">
        © 2025 YouTube Clone
      </div>
    </div>
  );
}