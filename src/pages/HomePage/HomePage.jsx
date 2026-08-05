import React from 'react';
import ProfileImage from "../../assets/home/profile.webp";

const HomePage = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -65;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return ( 
        <div id="home" className="min-h-screen w-full pt-20 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                
                {/* Profile Image (Top on Mobile, Right on Desktop) */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-2 lg:mb-0">
                    <div className="relative w-36 h-36 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-white/15 ring-1 ring-white/10 bg-card p-1 shadow-md">
                        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                            <img 
                                src={ProfileImage} 
                                alt="Shishir Shetty"
                                className="w-full h-full object-cover rounded-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl font-light" style={{display: 'none'}}>
                                SS
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text content */}
                <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
                    <div className="mb-6 sm:mb-8">
                        <div className="inline-block px-3 py-1 text-xs font-medium text-highlight bg-highlight/10 rounded-full border border-highlight/20 mb-3">
                            Available for work
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-3 sm:mb-4">
                            Hi, I'm <span className="text-highlight font-normal">Shishir Shetty</span>
                        </h1>
                        <p className="text-lg sm:text-2xl text-neutral-300 font-light mb-3 sm:mb-4">
                            Endlessly Enthusiastic
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Software developer focused on building scalable applications, exploring blockchain, AI, and web technologies with precision, efficiency, and problem-solving expertise.
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-8">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="cursor-pointer w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-highlight text-[#0f1117] font-medium text-sm rounded-lg 
                                     hover:bg-highlight/90 active:scale-[0.99] transition-all duration-200 shadow-sm"
                        >
                            View Projects
                        </button>
                        <button 
                            onClick={() => scrollToSection('contacts')}
                            className="cursor-pointer w-full sm:w-auto px-6 py-3 sm:py-2.5 border border-white/15 text-neutral-200 font-medium text-sm rounded-lg
                                     hover:bg-white/5 hover:border-white/25 active:scale-[0.99] transition-all duration-200"
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* Quick navigation pills (hidden on mobile for clean minimalist feel) */}
                    <div className="hidden sm:flex flex-wrap gap-2 justify-center lg:justify-start items-center text-xs text-neutral-500">
                        <span className="mr-1">Quick jump:</span>
                        <button 
                            onClick={() => scrollToSection('skills')}
                            className="cursor-pointer px-3 py-1 bg-white/[0.03] text-neutral-300 rounded-md border border-white/5
                                     hover:border-white/20 hover:text-white transition-colors duration-200"
                        >
                            Skills
                        </button>
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="cursor-pointer px-3 py-1 bg-white/[0.03] text-neutral-300 rounded-md border border-white/5
                                     hover:border-white/20 hover:text-white transition-colors duration-200"
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => scrollToSection('contacts')}
                            className="cursor-pointer px-3 py-1 bg-white/[0.03] text-neutral-300 rounded-md border border-white/5
                                     hover:border-white/20 hover:text-white transition-colors duration-200"
                        >
                            Contact
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;