import React, { useState } from "react";

const ImageGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64" />,
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64" />,
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64" />,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 bg-gray-100">
      <div className="relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-500 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            {image}
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;