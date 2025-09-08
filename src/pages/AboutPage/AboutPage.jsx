import { useState } from 'react';
import { User, MapPin, Calendar, Coffee, Code, Heart, Award, Target, Book, Gamepad2 } from 'lucide-react';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('story');

    const aboutTabs = {
        story: {
            icon: <User className="w-6 h-6" />,
            title: 'My Story',
            content: (
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        Hi, I'm <span className="text-highlight font-semibold">Shishir Shetty</span>, a passionate full-stack developer 
                        with a love for creating digital experiences that make a difference. My journey into programming began 
                        with curiosity and has evolved into a career dedicated to building innovative web applications.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        I specialize in modern web technologies like React, Node.js, and cloud platforms, always striving to 
                        write clean, efficient code that solves real-world problems. When I'm not coding, you'll find me 
                        exploring new technologies, playing games, or contributing to open-source projects.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        I believe in the power of technology to transform ideas into reality, and I'm always excited to 
                        collaborate on projects that challenge me to grow and learn something new.
                    </p>
                </div>
            )
        },
        interests: {
            icon: <Heart className="w-6 h-6" />,
            title: 'Interests',
            content: (
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Code className="w-5 h-5 text-highlight" />
                            <div>
                                <h5 className="font-semibold text-white">Programming</h5>
                                <p className="text-sm text-gray-300">Exploring new frameworks and languages</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Gamepad2 className="w-5 h-5 text-accent" />
                            <div>
                                <h5 className="font-semibold text-white">Gaming</h5>
                                <p className="text-sm text-gray-300">Valorant and strategy games</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Book className="w-5 h-5 text-highlight" />
                            <div>
                                <h5 className="font-semibold text-white">Learning</h5>
                                <p className="text-sm text-gray-300">Tech blogs and online courses</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Coffee className="w-5 h-5 text-accent" />
                            <div>
                                <h5 className="font-semibold text-white">Coffee</h5>
                                <p className="text-sm text-gray-300">Fuel for late-night coding sessions</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Target className="w-5 h-5 text-highlight" />
                            <div>
                                <h5 className="font-semibold text-white">Problem Solving</h5>
                                <p className="text-sm text-gray-300">Algorithmic challenges and puzzles</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600">
                            <Award className="w-5 h-5 text-accent" />
                            <div>
                                <h5 className="font-semibold text-white">Open Source</h5>
                                <p className="text-sm text-gray-300">Contributing to community projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    };

    const stats = [
        { label: 'Years Coding', value: '2+', icon: <Code className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: 'Projects Completed', value: '10+', icon: <Target className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: 'Technologies', value: '15+', icon: <Book className="w-4 h-4 md:w-5 md:h-5" /> },
        { label: 'Coffee Cups', value: '∞', icon: <Coffee className="w-4 h-4 md:w-5 md:h-5" /> }
    ];

    const TabButton = ({ tabKey, tab }) => (
        <button
            onClick={() => setActiveTab(tabKey)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 w-full text-left ${
                activeTab === tabKey
                    ? 'bg-highlight text-dominant shadow-lg transform scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-highlight'
            }`}
        >
            <div className={`transition-colors duration-300 ${
                activeTab === tabKey ? 'text-dominant' : 'text-highlight'
            }`}>
                {tab.icon}
            </div>
            <span className="font-medium">{tab.title}</span>
        </button>
    );

    return (
        <div className="min-h-screen w-full bg-dominant">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-dominant to-gray-900">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <User className="w-8 h-8 text-highlight" />
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                About Me
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Get to know the person behind the code - my journey, passions, and what drives me to create
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-highlight to-accent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg md:rounded-xl p-3 md:p-6 border border-gray-700 shadow-2xl hover:border-highlight transition-all duration-300 text-center group hover:scale-105">
                            <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-highlight/20 rounded-full mb-2 md:mb-4 group-hover:bg-highlight/30 transition-colors border border-highlight/30">
                                <div className="text-highlight">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tab Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-highlight" />
                                Learn More
                            </h3>
                            <div className="space-y-3">
                                {Object.entries(aboutTabs).map(([key, tab]) => (
                                    <TabButton key={key} tabKey={key} tab={tab} />
                                ))}
                            </div>

                            {/* Quick Facts Card - Responsive sizing */}
                            <div className="mt-8 bg-gray-800 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-gray-700 shadow-2xl hover:border-accent transition-colors duration-300">
                                <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                                    Quick Facts
                                </h4>
                                <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Location</span>
                                        <span className="text-white">Mangalore, Karnataka</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Experience</span>
                                        <span className="text-white">2+ Years</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Focus</span>
                                        <span className="text-white">Full-Stack</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Status</span>
                                        <span className="text-highlight">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="text-highlight">
                                    {aboutTabs[activeTab].icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white">
                                    {aboutTabs[activeTab].title}
                                </h3>
                            </div>
                            
                            <div>
                                {aboutTabs[activeTab].content}
                            </div>
                        </div>

                        {/* Philosophy Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-highlight transition-colors duration-300 shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="w-6 h-6 text-highlight" />
                                    <h4 className="text-xl font-semibold text-white">My Approach</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    I believe in writing clean, maintainable code and creating user-centered solutions. 
                                    Every project is an opportunity to learn and push boundaries.
                                </p>
                            </div>
                            
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-accent transition-colors duration-300 shadow-xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <Heart className="w-6 h-6 text-accent" />
                                    <h4 className="text-xl font-semibold text-white">What Drives Me</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    The excitement of solving complex problems and the satisfaction of seeing ideas 
                                    come to life through code motivates me every day.
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