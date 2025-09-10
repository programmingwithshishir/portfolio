import React from 'react';
import ProfileImage from "../../assets/home/profile.jpg";

const HomePage = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return ( 
        <div className="min-h-screen w-full py-16 sm:py-12 lg:py-0 md:px-16 bg-dominant relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-highlight rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-highlight rounded-full blur-2xl"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <div className="mb-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                                Hi, I'm{' '}
                                <span className="text-transparent bg-gradient-to-r from-highlight to-accent bg-clip-text">
                                    Shishir Shetty
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-300 mb-2">
                                Endlessly Enthusiastic
                            </p>
                            <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                                Software developer focused on building scalable applications, exploring blockchain, AI, and web technologies with precision, efficiency, and problem-solving expertise.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="cursor-pointer px-8 py-3 bg-gradient-to-r from-highlight to-accent text-white font-semibold rounded-full 
                                         hover:shadow-lg hover:shadow-highlight/25 transform hover:scale-105 transition-all duration-300
                                         focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-dominant"
                            >
                                View Projects
                            </button>
                            <button 
                                onClick={() => scrollToSection('contacts')}
                                className="cursor-pointer px-8 py-3 border-2 border-highlight text-highlight font-semibold rounded-full
                                         hover:bg-highlight hover:text-dominant transform hover:scale-105 transition-all duration-300
                                         focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-dominant"
                            >
                                Contact Me
                            </button>
                        </div>

                        {/* Quick navigation pills */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="cursor-pointer px-4 py-2 text-sm bg-white/10 text-gray-300 rounded-full backdrop-blur-sm
                                         hover:bg-white/20 hover:text-white transition-all duration-300
                                         focus:outline-none focus:ring-2 focus:ring-white/30"
                            >
                                Skills
                            </button>
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="cursor-pointer px-4 py-2 text-sm bg-white/10 text-gray-300 rounded-full backdrop-blur-sm
                                         hover:bg-white/20 hover:text-white transition-all duration-300
                                         focus:outline-none focus:ring-2 focus:ring-white/30"
                            >
                                Projects
                            </button>
                            <button 
                                onClick={() => scrollToSection('contacts')}
                                className="cursor-pointer px-4 py-2 text-sm bg-white/10 text-gray-300 rounded-full backdrop-blur-sm
                                         hover:bg-white/20 hover:text-white transition-all duration-300
                                         focus:outline-none focus:ring-2 focus:ring-white/30"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative">
                            {/* Glowing backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-highlight/20 to-accent/20 rounded-full blur-3xl transform scale-110"></div>
                            
                            {/* Image container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-highlight to-accent p-1">
                                <div className="w-full h-full bg-gradient-to-br from-highlight/10 to-accent/10 rounded-full flex items-center justify-center">
                                    {/* Replace this div with your actual image */}
                                    <img 
                                        src={ProfileImage} 
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                        onError={(e) => {
                                            // Fallback placeholder if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center text-white text-6xl font-bold" style={{display: 'none'}}>
                                        SS
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-highlight rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute top-1/3 -right-8 w-4 h-4 bg-white rounded-full animate-pulse delay-500"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;