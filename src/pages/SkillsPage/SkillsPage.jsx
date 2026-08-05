import { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Server, Brain, Wrench, FileText, Download, ExternalLink } from 'lucide-react';

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [animatedBars, setAnimatedBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedBars(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const skillCategories = {
        frontend: {
            icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
            title: 'Frontend Development',
            skills: [
                { name: 'React / Next.js', level: 95, description: 'Component UI & SSR' },
                { name: 'TypeScript', level: 90, description: 'Type-safe JS development' },
                { name: 'Tailwind CSS', level: 88, description: 'Responsive utility styling' },
                { name: 'JavaScript ES6+', level: 92, description: 'Modern async & web APIs' },
                { name: 'HTML5 & CSS3', level: 95, description: 'Semantic web standards' }
            ]
        },
        backend: {
            icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 85, description: 'Server-side JS runtime' },
                { name: 'Python', level: 80, description: 'Backend scripts & logic' },
                { name: 'Express.js', level: 82, description: 'REST APIs & routing' },
                { name: 'REST APIs', level: 88, description: 'API design & integration' },
            ]
        },
        database: {
            icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />,
            title: 'Database & Cloud',
            skills: [
                { name: 'MongoDB', level: 85, description: 'NoSQL document storage' },
                { name: 'PostgreSQL', level: 78, description: 'Relational data management' },
                { name: 'Firebase', level: 80, description: 'BaaS & real-time DB' },
                { name: 'Docker', level: 75, description: 'App containerization' }
            ]
        },
    };

    const SkillBar = ({ skill, index }) => (
        <div className="mb-4 sm:mb-5 group">
            <div className="flex justify-between items-center mb-1">
                <h4 className="text-xs sm:text-sm font-medium text-white">{skill.name}</h4>
                <span className="text-[11px] sm:text-xs font-mono text-highlight">{skill.level}%</span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400 mb-1.5 font-light">{skill.description}</p>
            <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <div 
                    className="h-full bg-highlight rounded-full transition-all duration-700 ease-out"
                    style={{
                        width: animatedBars ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 60}ms`
                    }}
                />
            </div>
        </div>
    );

    return ( 
        <div id="skills" className="py-14 sm:py-20 w-full bg-dominant border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-medium text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/20 mb-2">
                            <Brain className="w-3.5 h-3.5" />
                            Expertise
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                            Technical Skills
                        </h2>
                    </div>

                    {/* Resume Action Buttons */}
                    <div className="flex gap-2">
                        <button 
                            onClick={() => window.open('/assets/resume/resume.pdf', '_blank')}
                            className="cursor-pointer px-3.5 py-2 bg-highlight text-[#0f1117] font-medium text-xs rounded-lg hover:bg-highlight/90 active:scale-[0.99] transition-all flex items-center gap-1.5"
                        >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Resume</span>
                            <ExternalLink className="w-3 h-3" />
                        </button>
                        
                        <a 
                            href="/assets/resume/resume.pdf" 
                            download="resume.pdf"
                            className="px-3.5 py-2 border border-white/10 text-neutral-300 font-medium text-xs rounded-lg hover:border-white/20 active:scale-[0.99] transition-all flex items-center gap-1.5"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Horizontal Pill Tabs */}
                <div className="flex lg:hidden gap-2 mb-4 overflow-x-auto pb-1">
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                                activeCategory === key
                                    ? 'bg-white/10 text-white border border-white/10'
                                    : 'bg-white/[0.02] text-neutral-400 border border-transparent'
                            }`}
                        >
                            {category.icon}
                            <span>{category.title}</span>
                        </button>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Desktop Category Navigation */}
                    <div className="hidden lg:block lg:col-span-4 space-y-2">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
                            <Wrench className="w-3.5 h-3.5 text-highlight" />
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {Object.entries(skillCategories).map(([key, category]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 w-full text-left text-sm cursor-pointer ${
                                        activeCategory === key
                                            ? 'bg-white/10 text-white font-medium border border-white/10'
                                            : 'bg-white/[0.02] text-neutral-400 hover:bg-white/[0.05] hover:text-white border border-transparent'
                                    }`}
                                >
                                    <div className={activeCategory === key ? 'text-highlight' : 'text-neutral-500'}>
                                        {category.icon}
                                    </div>
                                    <span>{category.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Skills Display */}
                    <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                        <div className="bg-card rounded-xl p-4 sm:p-7 border border-white/5">
                            <div className="flex items-center gap-2.5 mb-4 sm:mb-6 pb-3 border-b border-white/5">
                                <div className="text-highlight">
                                    {skillCategories[activeCategory].icon}
                                </div>
                                <h3 className="text-base sm:text-xl font-semibold text-white">
                                    {skillCategories[activeCategory].title}
                                </h3>
                            </div>
                            
                            <div className="space-y-3.5 sm:space-y-5">
                                {skillCategories[activeCategory].skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-card rounded-xl p-4 sm:p-5 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Globe className="w-4 h-4 text-highlight" />
                                    <h4 className="text-sm font-medium text-white">Continuous Growth</h4>
                                </div>
                                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                    Exploring new web standards, AI integrations, and cloud tools.
                                </p>
                            </div>
                            
                            <div className="bg-card rounded-xl p-4 sm:p-5 border border-white/5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Palette className="w-4 h-4 text-highlight" />
                                    <h4 className="text-sm font-medium text-white">Creative Execution</h4>
                                </div>
                                <p className="text-neutral-400 text-xs leading-relaxed font-light">
                                    Engineering robust backend logic with clean frontend UX.
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