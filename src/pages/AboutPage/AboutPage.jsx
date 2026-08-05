import { useState } from 'react';
import { User, MapPin, Calendar, Coffee, Code, Heart, Award, Target, Book, Gamepad2 } from 'lucide-react';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('story');

    const aboutTabs = {
        story: {
            icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,
            title: 'My Story',
            content: (
                <div className="space-y-3 sm:space-y-4 text-neutral-300 leading-relaxed font-light text-sm sm:text-base">
                    <p>
                        Hi, I'm <span className="text-white font-normal">Shishir Shetty</span>, a full-stack developer 
                        with a passion for creating clean digital experiences. My journey into programming began 
                        with curiosity and has evolved into building scalable web applications.
                    </p>
                    <p>
                        I specialize in React, Node.js, and modern cloud platforms, always striving to write clean, efficient code that solves real-world problems. When not coding, I enjoy exploring new tech stacks and open-source projects.
                    </p>
                </div>
            )
        },
        interests: {
            icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />,
            title: 'Interests',
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <Code className="w-4 h-4 text-highlight flex-shrink-0" />
                        <div>
                            <h5 className="font-medium text-white text-xs sm:text-sm">Programming</h5>
                            <p className="text-[11px] sm:text-xs text-neutral-400">Frameworks & modern web</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <Gamepad2 className="w-4 h-4 text-highlight flex-shrink-0" />
                        <div>
                            <h5 className="font-medium text-white text-xs sm:text-sm">Gaming</h5>
                            <p className="text-[11px] sm:text-xs text-neutral-400">Valorant & strategy games</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <Coffee className="w-4 h-4 text-highlight flex-shrink-0" />
                        <div>
                            <h5 className="font-medium text-white text-xs sm:text-sm">Coffee</h5>
                            <p className="text-[11px] sm:text-xs text-neutral-400">Coding fuel</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/5">
                        <Target className="w-4 h-4 text-highlight flex-shrink-0" />
                        <div>
                            <h5 className="font-medium text-white text-xs sm:text-sm">Problem Solving</h5>
                            <p className="text-[11px] sm:text-xs text-neutral-400">Algorithms & logic</p>
                        </div>
                    </div>
                </div>
            )
        }
    };

    const stats = [
        { label: 'Years Coding', value: '2+', icon: <Code className="w-3.5 h-3.5" /> },
        { label: 'Projects', value: '10+', icon: <Target className="w-3.5 h-3.5" /> },
        { label: 'Technologies', value: '15+', icon: <Book className="w-3.5 h-3.5" /> },
        { label: 'Coffee Cups', value: '∞', icon: <Coffee className="w-3.5 h-3.5" /> }
    ];

    return (
        <div id="about" className="py-14 sm:py-20 w-full bg-dominant border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/20 mb-2.5">
                        <User className="w-3.5 h-3.5" />
                        About Me
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                        Background & Passions
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-base mt-1.5 max-w-2xl font-light">
                        My journey into software development and what drives me to build.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-card rounded-xl p-3 sm:p-4 border border-white/5">
                            <div className="flex items-center justify-between mb-1 sm:mb-2">
                                <span className="text-[11px] sm:text-xs text-neutral-400">{stat.label}</span>
                                <div className="text-highlight opacity-80">{stat.icon}</div>
                            </div>
                            <div className="text-xl sm:text-2xl font-semibold text-white">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile Horizontal Tab Selector */}
                <div className="flex sm:hidden gap-2 mb-4 overflow-x-auto pb-1">
                    {Object.entries(aboutTabs).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                                activeTab === key
                                    ? 'bg-white/10 text-white border border-white/10'
                                    : 'bg-white/[0.02] text-neutral-400 border border-transparent'
                            }`}
                        >
                            {tab.icon}
                            <span>{tab.title}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Desktop Sidebar Navigation */}
                    <div className="hidden sm:block lg:col-span-4 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-highlight" />
                                Navigation
                            </h3>
                            <div className="space-y-2">
                                {Object.entries(aboutTabs).map(([key, tab]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left text-sm cursor-pointer ${
                                            activeTab === key
                                                ? 'bg-white/10 text-white font-medium border border-white/10'
                                                : 'bg-white/[0.02] text-neutral-400 hover:bg-white/[0.05] hover:text-white border border-transparent'
                                        }`}
                                    >
                                        <div className={activeTab === key ? 'text-highlight' : 'text-neutral-500'}>
                                            {tab.icon}
                                        </div>
                                        <span>{tab.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Facts */}
                        <div className="bg-card rounded-xl p-4 sm:p-5 border border-white/5">
                            <h4 className="text-xs sm:text-sm font-medium text-white mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-highlight" />
                                Quick Facts
                            </h4>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between py-1 border-b border-white/5">
                                    <span className="text-neutral-400">Location</span>
                                    <span className="text-neutral-200">Mangalore, India</span>
                                </div>
                                <div className="flex justify-between py-1 border-b border-white/5">
                                    <span className="text-neutral-400">Experience</span>
                                    <span className="text-neutral-200">2+ Years</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-neutral-400">Focus</span>
                                    <span className="text-highlight">Full-Stack</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                        <div className="bg-card rounded-xl p-4 sm:p-7 border border-white/5">
                            <div className="flex items-center gap-2.5 mb-4 sm:mb-6 pb-3 border-b border-white/5">
                                <div className="text-highlight">
                                    {aboutTabs[activeTab].icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">
                                    {aboutTabs[activeTab].title}
                                </h3>
                            </div>
                            
                            <div>
                                {aboutTabs[activeTab].content}
                            </div>
                        </div>

                        {/* Philosophy Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-card rounded-xl p-4 sm:p-5 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-highlight" />
                                    <h4 className="text-sm font-medium text-white">My Approach</h4>
                                </div>
                                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                    Writing clean, maintainable code with user-centric solutions.
                                </p>
                            </div>
                            
                            <div className="bg-card rounded-xl p-4 sm:p-5 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Heart className="w-4 h-4 text-highlight" />
                                    <h4 className="text-sm font-medium text-white">What Drives Me</h4>
                                </div>
                                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                    Solving complex technical challenges and turning ideas into real code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;