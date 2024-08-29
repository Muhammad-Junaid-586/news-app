import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white">
      {/* News Image */}
      {news.urlToImage && (
        <div className="w-full h-[200px]">
          <img
            src={news.urlToImage}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* News Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {news.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {news.description}
        </p>

        {/* Footer: Read More Link and Published Date */}
        <div className="flex justify-between items-center text-blue-500 text-sm">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Read More...
          </a>
          <p className="text-gray-400 text-xs">
            {new Date(news.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
