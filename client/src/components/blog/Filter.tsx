"use client";
import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";

export function FilterBar() {
  const [category, setCategory] = useState("all");
  const categories = ["All", "Technology", "Travel", "Food", "Lifestyle"];

  return (
    <div className="w-full py-8 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Categories Dropdown */}
          <div className="relative group w-full sm:w-auto">
            <button className="w-full sm:w-auto px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg flex items-center justify-between gap-2">
              <span>Category: {category}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg hidden group-hover:block">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat.toLowerCase())}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Button */}
          <button className="w-full sm:w-auto px-4 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg flex items-center justify-center gap-2">
            <Filter className="h-4 w-4" />
            <span>Sort</span>
          </button>
        </div>
      </div>
    </div>
  );
}