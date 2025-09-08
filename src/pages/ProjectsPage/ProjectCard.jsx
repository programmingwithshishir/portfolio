import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  images = [], 
  tags = [], 
  description = "Project description goes here...",
  longDescription = "Detailed project description with more information about the technologies used, challenges faced, and solutions implemented.",
  liveUrl = "",
  githubUrl = ""
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
    setCurrentImageIndex(0);
  };

  return (
    <>
      {/* Project Card - Enhanced with elevated styling */}
      <div 
        className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl hover:border-highlight transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-highlight/20 group hover:scale-105"
        onClick={openFullscreen}
      >
        {/* Image Preview */}
        {images.length > 0 && (
          <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden border border-gray-600">
            <img 
              src={images[0]} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-highlight transition-colors duration-300">
          {title}
        </h3>

        {/* Description Preview */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tags - Enhanced styling */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-highlight/20 text-highlight text-xs rounded-full border border-highlight/30 group-hover:bg-highlight/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal - Enhanced styling */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen p-4 md:p-8">
            {/* Close Button - Enhanced */}
            <button
              onClick={closeFullscreen}
              className="cursor-pointer fixed top-4 right-4 z-60 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 border border-gray-600 shadow-lg hover:border-highlight"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl mx-auto pt-16">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                {title}
              </h1>

              {/* Image Gallery - Enhanced styling */}
              {images.length > 0 && (
                <div className="relative mb-8">
                  <div className="w-full h-64 md:h-96 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                    <img 
                      src={images[currentImageIndex]} 
                      alt={`${title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Image Navigation - Enhanced */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 border border-gray-600 shadow-lg hover:border-highlight"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 border border-gray-600 shadow-lg hover:border-highlight"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      
                      {/* Image Indicators - Enhanced */}
                      <div className="flex justify-center mt-4 gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentImageIndex === index ? 'bg-highlight scale-125' : 'bg-gray-500 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Project Details - Enhanced with card styling */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Description - Now in a card */}
                <div className="md:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl">
                  <h2 className="text-xl font-semibold text-white mb-4">About This Project</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {longDescription}
                  </p>

                  {/* Action Buttons - Enhanced */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-highlight hover:bg-highlight/90 text-dominant font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-highlight/20 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 hover:border-highlight text-white hover:text-highlight font-medium rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies - Now in a card with hover effect */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl hover:border-accent transition-colors duration-300">
                  <h2 className="text-xl font-semibold text-white mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-2 bg-highlight/20 text-highlight text-sm rounded-lg border border-highlight/30 hover:bg-highlight/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;