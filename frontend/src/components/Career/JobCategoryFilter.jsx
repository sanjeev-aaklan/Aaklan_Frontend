// components/Career/JobCategoryFilter.js
import React from 'react';

const JobCategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
            }`}
          >
            <IconComponent className="text-sm" />
            {category.name}
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeCategory === category.id
                ? 'bg-white text-orange-500'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default JobCategoryFilter;