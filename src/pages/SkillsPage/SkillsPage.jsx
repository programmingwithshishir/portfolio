import { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Smartphone, Server, Brain, Wrench } from 'lucide-react';

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [animatedBars, setAnimatedBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedBars(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const skillCategories = {
        frontend: {
            icon: <Code className="w-6 h-6" />,
            title: 'Frontend Development',
            skills: [
                { name: 'React/Next.js', level: 95, description: 'Component-based UI development' },
                { name: 'TypeScript', level: 90, description: 'Type-safe JavaScript development' },
                { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS framework' },
                { name: 'JavaScript ES6+', level: 92, description: 'Modern JavaScript features' },
                { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup and styling' }
            ]
        },
        backend: {
            icon: <Server className="w-6 h-6" />,
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 85, description: 'Server-side JavaScript runtime' },
                { name: 'Python', level: 80, description: 'Versatile programming language' },
                { name: 'Express.js', level: 82, description: 'Web application framework' },
                { name: 'REST APIs', level: 88, description: 'RESTful service architecture' },
            ]
        },
        database: {
            icon: <Database className="w-6 h-6" />,
            title: 'Database & Cloud',
            skills: [
                { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
                { name: 'PostgreSQL', level: 78, description: 'Relational database management' },
                { name: 'Firebase', level: 80, description: 'Backend-as-a-Service platform' },
                { name: 'Docker', level: 75, description: 'Containerization platform' }
            ]
        },
    };

    const SkillBar = ({ skill, index }) => (
        <div className="mb-6 group">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                <span className="text-sm font-medium text-highlight">{skill.level}%</span>
            </div>
            <p className="text-sm text-gray-300 mb-3">{skill.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                    className={`h-full bg-gradient-to-r from-highlight to-accent rounded-full transition-all duration-1000 ease-out ${
                        animatedBars ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        width: animatedBars ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                    }}
                >
                    <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
            </div>
        </div>
    );

    const CategoryButton = ({ categoryKey, category }) => (
        <button
            onClick={() => setActiveCategory(categoryKey)}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 w-full text-left ${
                activeCategory === categoryKey
                    ? 'bg-highlight text-dominant shadow-lg transform scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-highlight'
            }`}
        >
            <div className={`transition-colors duration-300 ${
                activeCategory === categoryKey ? 'text-dominant' : 'text-highlight'
            }`}>
                {category.icon}
            </div>
            <span className="font-medium">{category.title}</span>
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
                            <Brain className="w-8 h-8 text-highlight" />
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                My Skills
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-highlight to-accent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Category Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Wrench className="w-6 h-6 text-highlight" />
                                Skill Categories
                            </h3>
                            <div className="space-y-3">
                                {Object.entries(skillCategories).map(([key, category]) => (
                                    <CategoryButton key={key} categoryKey={key} category={category} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Display */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="text-highlight">
                                    {skillCategories[activeCategory].icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white">
                                    {skillCategories[activeCategory].title}
                                </h3>
                            </div>
                            
                            <div className="space-y-6">
                                {skillCategories[activeCategory].skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Additional Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-highlight transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="w-6 h-6 text-highlight" />
                                    <h4 className="text-xl font-semibold text-white">Always Learning</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    I'm constantly exploring new technologies and frameworks to stay current with industry trends and best practices.
                                </p>
                            </div>
                            
                            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-accent transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Palette className="w-6 h-6 text-accent" />
                                    <h4 className="text-xl font-semibold text-white">Creative Problem Solving</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    I enjoy tackling complex challenges and finding elegant solutions that balance functionality with user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SkillsPage;