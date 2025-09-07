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
      {/* Project Card */}
      <div 
        className="bg-dominant border border-highlight/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/10 group"
        onClick={openFullscreen}
      >
        {/* Image Preview */}
        {images.length > 0 && (
          <div className="w-full h-48 bg-highlight/10 rounded-lg mb-4 overflow-hidden">
            <img 
              src={images[0]} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-highlight mb-3 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>

        {/* Description Preview */}
        <p className="text-highlight/80 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-dominant/95 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen p-4 md:p-8">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="cursor-pointer fixed top-4 right-4 z-60 p-2 bg-highlight/20 hover:bg-highlight/30 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-highlight" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl mx-auto pt-16">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-highlight mb-6 text-center">
                {title}
              </h1>

              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="relative mb-8">
                  <div className="w-full h-64 md:h-96 bg-highlight/10 rounded-xl overflow-hidden">
                    <img 
                      src={images[currentImageIndex]} 
                      alt={`${title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-dominant/80 hover:bg-dominant rounded-full transition-colors duration-200"
                      >
                        <ChevronLeft className="w-5 h-5 text-highlight" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-dominant/80 hover:bg-dominant rounded-full transition-colors duration-200"
                      >
                        <ChevronRight className="w-5 h-5 text-highlight" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="flex justify-center mt-4 gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              currentImageIndex === index ? 'bg-accent' : 'bg-highlight/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Project Details */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Description */}
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold text-highlight mb-4">About This Project</h2>
                  <p className="text-highlight/80 leading-relaxed mb-6">
                    {longDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-dominant font-medium rounded-lg transition-colors duration-200"
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
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-highlight/30 hover:border-accent/50 text-highlight hover:text-accent font-medium rounded-lg transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-xl font-semibold text-highlight mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-2 bg-accent/20 text-accent text-sm rounded-lg border border-accent/30"
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