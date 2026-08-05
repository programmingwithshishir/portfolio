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
        className="bg-card border border-white/5 rounded-xl p-4 sm:p-5 hover:border-white/20 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
        onClick={openFullscreen}
      >
        <div>
          {/* Image Preview */}
          {images.length > 0 && (
            <div className="w-full h-36 sm:h-44 bg-neutral-900 rounded-lg mb-3 sm:mb-4 overflow-hidden border border-white/5">
              <img 
                src={images[0]} 
                alt={title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          )}

          {/* Title */}
          <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-highlight transition-colors duration-200">
            {title}
          </h3>

          {/* Description Preview */}
          <p className="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 bg-white/[0.03] text-neutral-300 text-[11px] sm:text-xs rounded border border-white/5 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-[#0f1117]/95 backdrop-blur-md z-50 overflow-y-auto">
          <div className="min-h-screen p-3 sm:p-6 md:p-8">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="cursor-pointer fixed top-3 right-3 sm:top-4 sm:right-4 z-60 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/15"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl mx-auto pt-10 sm:pt-14 pb-10">
              {/* Title */}
              <h1 className="text-xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6 text-center">
                {title}
              </h1>

              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-full h-48 sm:h-72 md:h-96 bg-neutral-900 rounded-xl overflow-hidden border border-white/10">
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
                        className="cursor-pointer absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 rounded-lg transition-colors border border-white/10 text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="cursor-pointer absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 rounded-lg transition-colors border border-white/10 text-white"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="flex justify-center mt-2.5 sm:mt-3 gap-1.5">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                              currentImageIndex === index ? 'bg-highlight w-4' : 'bg-white/20 hover:bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Description */}
                <div className="md:col-span-2 bg-card rounded-xl p-4 sm:p-6 border border-white/5">
                  <h2 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">About This Project</h2>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                    {longDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-highlight text-[#0f1117] font-medium text-xs rounded-lg hover:bg-highlight/90 transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Live
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 border border-white/10 text-neutral-200 font-medium text-xs rounded-lg hover:border-white/20 hover:text-white transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-card rounded-xl p-4 sm:p-6 border border-white/5">
                  <h2 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-white/[0.03] text-neutral-300 text-[11px] sm:text-xs rounded border border-white/5 font-mono"
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