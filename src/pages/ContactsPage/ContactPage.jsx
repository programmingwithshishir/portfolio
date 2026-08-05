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
        <div id="contacts" className="py-14 sm:py-20 w-full bg-dominant border-t border-white/5 overflow-x-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8 sm:mb-12 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-highlight bg-highlight/10 px-3 py-1 rounded-full border border-highlight/20 mb-2.5">
                        <MessageCircle className="w-3.5 h-3.5" />
                        Contact
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-base mt-1.5 max-w-2xl font-light">
                        Always open to discussing new projects, technical ideas, or opportunities.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* Contact Methods */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-1">
                            Get In Touch
                        </h3>
                        
                        <div className="space-y-2.5 sm:space-y-3">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block p-3.5 sm:p-5 bg-card hover:border-white/20 rounded-xl transition-all border border-white/5"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.03] rounded-lg flex items-center justify-center border border-white/5 text-highlight">
                                                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                                </div>
                                                <div className="min-w-0 pr-2">
                                                    <h4 className="text-xs sm:text-sm font-medium text-white mb-0.5">
                                                        {method.label}
                                                    </h4>
                                                    <p className="text-xs text-highlight font-mono mb-0.5 break-all sm:break-normal">
                                                        {method.value}
                                                    </p>
                                                    <p className="text-[11px] sm:text-xs text-neutral-500 font-light">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* CTA Card */}
                        <div className="p-4 sm:p-6 bg-card rounded-xl border border-white/5 space-y-3 sm:space-y-4">
                            <h4 className="text-sm sm:text-base font-medium text-white">
                                Ready to Start a Project?
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                                Whether you need a full-stack web application or technical collaboration, feel free to drop a message.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 pt-1">
                                <a
                                    href="mailto:programmingwithshishir@gmail.com"
                                    className="inline-flex items-center justify-center px-4 py-2.5 sm:py-2 bg-highlight text-[#0f1117] font-medium rounded-lg text-xs hover:bg-highlight/90 active:scale-[0.99] transition-all"
                                >
                                    <Mail className="w-3.5 h-3.5 mr-2" />
                                    Send Email
                                </a>
                                <button
                                    onClick={() => {
                                        const el = document.getElementById('projects');
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 65;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                    className="inline-flex items-center justify-center px-4 py-2.5 sm:py-2 border border-white/10 text-neutral-300 font-medium rounded-lg text-xs hover:border-white/20 hover:text-white active:scale-[0.99] transition-all cursor-pointer"
                                >
                                    View My Work
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Links & Info */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                        <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-1">
                            Find Me Online
                        </h3>
                        
                        <div className="space-y-2.5 sm:space-y-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between p-3.5 sm:p-4 bg-card hover:border-white/20 rounded-xl transition-all border border-white/5"
                                    >
                                        <div className="flex items-center space-x-3 min-w-0">
                                            <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-white/[0.03] rounded-lg flex items-center justify-center border border-white/5 text-highlight">
                                                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-xs sm:text-sm font-medium text-white truncate">{social.label}</h4>
                                                <p className="text-[11px] sm:text-xs text-neutral-400 font-mono truncate">{social.username}</p>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Quick Info */}
                        <div className="p-4 sm:p-5 bg-card rounded-xl border border-white/5">
                            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">Availability</h4>
                            <div className="space-y-1.5 text-xs text-neutral-300 font-light">
                                <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                    Usually respond within 24 hours
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-highlight flex-shrink-0"></span>
                                    Available for remote collaborations
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                    Open to freelance & full-time roles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <footer className="mt-14 sm:mt-20 pt-6 border-t border-white/5 text-center">
                    <p className="text-neutral-500 text-xs font-light">
                        © 2025 Shishir Shetty. Built with React & Tailwind CSS.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default ContactPage;