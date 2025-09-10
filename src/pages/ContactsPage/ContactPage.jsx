import { Mail, Phone, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "programmingwithshishir@gmail.com",
            href: "mailto:programmingwithshishir@gmail.com",
            description: "Best way to reach me"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 8108452426",
            href: "tel:+918108452426",
            description: "Available Everyday"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/programmingwithshishir",
            username: "@programmingwithshishir"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/programmingwithshishir",
            username: "Shishir Shetty"
        }
    ];

    return (
        <div id="contacts" className="min-h-screen w-full bg-dominant overflow-x-hidden">
            {/* Header Section - Updated to match SkillsPage */}
            <div className="relative overflow-hidden bg-gradient-to-br from-dominant to-gray-900">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <MessageCircle className="w-8 h-8 text-highlight" />
                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                Let's Work Together
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                            or simply chat about development and technology
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-highlight to-accent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Updated styling to match SkillsPage */}
            <div className="max-w-6xl mx-auto px-3 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
                    {/* Contact Methods */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8">
                            Get In Touch
                        </h2>
                        
                        <div className="space-y-4 sm:space-y-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block p-4 sm:p-6 bg-gray-800 hover:border-highlight rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-highlight/10 border border-gray-700 shadow-2xl"
                                    >
                                        <div className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-highlight/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-highlight/30 transition-colors border border-highlight/30">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-highlight" />
                                            </div>
                                            <div className="flex-1 min-w-0 pr-2">
                                                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                                                    {method.label}
                                                </h3>
                                                <p className="text-sm sm:text-base text-highlight font-medium mb-1 break-all sm:break-normal">
                                                    {method.value}
                                                </p>
                                                <p className="text-xs sm:text-sm text-gray-300">
                                                    {method.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-highlight transition-colors" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Social Links & CTA */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6 lg:mb-8">
                            Find Me Online
                        </h2>
                        
                        <div className="space-y-3 sm:space-y-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center p-3 sm:p-4 bg-gray-800 hover:border-highlight rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700 shadow-xl"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-highlight/20 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-highlight/30 transition-colors mr-3 sm:mr-4 border border-highlight/30">
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-highlight" />
                                        </div>
                                        <div className="flex-1 min-w-0 pr-2">
                                            <h3 className="text-sm sm:text-base font-medium text-white truncate">{social.label}</h3>
                                            <p className="text-xs sm:text-sm text-gray-300 truncate">{social.username}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-highlight transition-colors" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* CTA Card - Updated to match SkillsPage */}
                        <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 shadow-2xl hover:border-accent transition-colors duration-300">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                                Ready to Start a Project?
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                Whether you need a full-stack web application, a mobile app, 
                                or just want to discuss your ideas, I'm here to help bring your vision to life.
                            </p>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <a
                                    href="mailto:programmingwithshishir@gmail.com"
                                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-highlight hover:bg-highlight/90 text-dominant font-medium rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-highlight/20 hover:scale-105"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                </a>
                                <a
                                    href="#projects"
                                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-600 text-white font-medium rounded-lg hover:border-highlight hover:text-highlight transition-all duration-300 text-sm sm:text-base shadow-lg hover:scale-105"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>

                        {/* Quick Info - Updated styling */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800 rounded-lg sm:rounded-xl border border-gray-700 shadow-xl hover:border-accent transition-colors duration-300">
                            <h4 className="text-sm sm:text-base font-semibold text-white mb-2 sm:mb-3">Quick Info</h4>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                <p>⚡ Usually respond within 24 hours</p>
                                <p>🌍 Available for remote collaborations</p>
                                <p>💼 Open to freelance and full-time opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <footer className="mt-20 bg-gray-900 border-t border-gray-700 py-8">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-highlight rounded-full"></div>
                            <p className="text-gray-400 text-sm">
                                © 2025 Shishir Shetty
                            </p>
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <p className="text-gray-500 text-xs">
                            Built with React & Tailwind CSS
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ContactPage;