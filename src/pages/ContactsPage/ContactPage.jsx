import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

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
            description: "Available everyday"
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
        <div className="min-h-screen w-full bg-highlight overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-3 py-8 sm:px-4 sm:py-12 lg:px-8 lg:py-16">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dominant mb-4 sm:mb-6 leading-tight">
                        Let's Work
                        <span className="block text-accent">Together</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-dominant/80 max-w-3xl mx-auto leading-relaxed px-2">
                        I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                        or simply chat about development and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
                    {/* Contact Methods */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dominant mb-4 sm:mb-6 lg:mb-8">
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
                                        className="group block p-4 sm:p-6 bg-dominant/5 hover:bg-dominant/10 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg border border-dominant/10"
                                    >
                                        <div className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                            </div>
                                            <div className="flex-1 min-w-0 pr-2">
                                                <h3 className="text-base sm:text-lg font-semibold text-dominant mb-1">
                                                    {method.label}
                                                </h3>
                                                <p className="text-sm sm:text-base text-dominant font-medium mb-1 break-all sm:break-normal">
                                                    {method.value}
                                                </p>
                                                <p className="text-xs sm:text-sm text-dominant/60">
                                                    {method.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <ExternalLink className="w-4 h-4 text-dominant/40 group-hover:text-accent transition-colors" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Social Links & CTA */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-dominant mb-4 sm:mb-6 lg:mb-8">
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
                                        className="group flex items-center p-3 sm:p-4 bg-dominant/5 hover:bg-dominant/10 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent/10 rounded-md sm:rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors mr-3 sm:mr-4">
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0 pr-2">
                                            <h3 className="text-sm sm:text-base font-medium text-dominant truncate">{social.label}</h3>
                                            <p className="text-xs sm:text-sm text-dominant/60 truncate">{social.username}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <ExternalLink className="w-4 h-4 text-dominant/40 group-hover:text-accent transition-colors" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* CTA Card */}
                        <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl sm:rounded-2xl border border-accent/20">
                            <h3 className="text-lg sm:text-xl font-semibold text-dominant mb-3 sm:mb-4">
                                Ready to Start a Project?
                            </h3>
                            <p className="text-sm sm:text-base text-dominant/70 mb-4 sm:mb-6 leading-relaxed">
                                Whether you need a full-stack web application, a mobile app, 
                                or just want to discuss your ideas, I'm here to help bring your vision to life.
                            </p>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <a
                                    href="mailto:programmingwithshishir@gmail.com"
                                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-highlight font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm sm:text-base"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Email
                                </a>
                                <a
                                    href="#projects"
                                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-dominant/20 text-dominant font-medium rounded-lg hover:border-accent hover:text-accent transition-colors text-sm sm:text-base"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-dominant/5 rounded-lg sm:rounded-xl">
                            <h4 className="text-sm sm:text-base font-semibold text-dominant mb-2 sm:mb-3">Quick Info</h4>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-dominant/70">
                                <p>⚡ Usually respond within 24 hours</p>
                                <p>🌍 Available for remote collaborations</p>
                                <p>💼 Open to freelance and full-time opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-2">
                    <p className="text-base sm:text-lg text-dominant/60 mb-3 sm:mb-4">
                        Have a project in mind?
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dominant leading-tight">
                        Let's make it happen
                        <span className="text-accent">.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;