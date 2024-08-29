import React, { useRef, useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsApp = () => {
  const ApiKey = `9194177b322b4e939c8e8fb0a25389f0`;
  const [query, setQuery] = useState("tesla");
  const [newsList, setNewsList] = useState([]);
  const inputRef = useRef(null);

  const ApiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-07-29&sortBy=publishedAt&apiKey=${ApiKey}`;

  // Fetch data when query changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(ApiUrl);
        let data = await response.json();
        console.log(data);
        setNewsList(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  // Update query on button click
  function handleSubmit() {
    setQuery(inputRef.current.value); // Set the query state to the input value
    inputRef.current.value = "";
  }

  const newsButtons = [
    { label: "Technology", query: "technology" },
    { label: "Sports", query: "sports" },
    { label: "Business", query: "business" },
    { label: "Health", query: "health" },
    { label: "Science", query: "science" },
    { label: "Entertainment", query: "entertainment" },
    { label: "World", query: "world" },
    { label: "Politics", query: "politics" },
    { label: "Finance", query: "finance" },
    { label: "Travel", query: "travel" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-center text-4xl font-bold font-mono py-5 text-blue-600">
        News App
      </h1>

      {/* Search Input and Button */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <input
          type="text"
          placeholder="Search for news..."
          ref={inputRef}
          className="w-full max-w-sm px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 shadow-md"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* News Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {newsButtons.map((button, index) => (
          <button
            key={index}
            value={button.query}
            onClick={() => setQuery(button.query)}
            className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
