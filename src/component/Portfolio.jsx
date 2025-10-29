import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, Award, GraduationCap, ChevronRight, ExternalLink, Star, Download, Send, CheckCircle, Calendar, Building, Sparkles, Zap, Rocket, Target } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioData = {
    name: "Gautami Talkhe",
    title: "Computer Engineer",
    tagline: "Building Beautiful Digital Experiences",
    email: "gautamitalkhe1234@gmail.com",
    phone: "+91 860 042 5536",
    location: "Nashik, Maharashtra, India",
    summary: "A highly motivated and detail-oriented BE Computer Engineering graduate with a strong passion for Frontend development. Eager to explore diverse IT domains while specializing in React and modern web technologies.",
    
    skills: {
      "Programming Languages": ["Java", "JavaScript", "HTML5", "CSS"],
      "Frameworks": ["React.js", "Bootstrap", "Tailwind CSS", "Reactstrap"],
      "Databases": ["MySQL", "MongoDB"],
      "Backend": ["Express.js", "Node.js"],
      "Tools": ["Postman", "GitHub", "Git", "Vite"]
    },
    
    experience: [
      {
        role: "MERN Stack Developer",
        company: "Softcrowd Technologies",
        period: "April 2024 - October 2024",
        location: "Nashik, India",
        points: [
          "Developed and maintained frontend applications using React.js",
          "Worked on MERN Stack projects with various frameworks",
          "Collaborated with cross-functional teams"
        ]
      },
      {
        role: "ReactJS Developer",
        company: "GM Solution",
        period: "January 2025 - Present",
        location: "Nashik, India",
        points: [
          "Developed responsive web applications using React.js",
          "Enhanced UI/UX design for improved user experience",
          "Implemented modern frontend best practices"
        ]
      },
      {
        role: "ReactJS Developer",
        company: "Anstric Games LLC",
        period: "January 2025 - March 2025",
        location: "Nashik, India",
        points: [
          "Built responsive web applications",
          "Enhanced UI/UX design",
          "Worked on game-related web interfaces"
        ]
      }
    ],
    
    projects: [
      {
        name: "Interactive Quiz Platform",
        tech: ["React.js", "JavaScript", "Tailwind CSS"],
        description: "A web-based quiz application with instant feedback and progress tracking.",
        features: [
          "Quiz management with predefined questions",
          "Instant feedback and timed quizzes",
          "Scoreboard and progress monitoring"
        ]
      },
      {
        name: "Weather App",
        tech: ["React.js", "Material-UI", "Weather API"],
        description: "Real-time weather information with dynamic API integration.",
        features: [
          "Real-time weather data from API",
          "Auto-refresh functionality",
          "Dynamic temperature and conditions display"
        ]
      },
      {
        name: "Netflix Clone",
        tech: ["React.js", "JavaScript", "Bootstrap"],
        description: "Frontend application mimicking Netflix UI/UX.",
        features: [
          "Replicates Netflix homepage",
          "Video playback controls",
          "Responsive navigation"
        ]
      },
      {
        name: "Crypto App",
        tech: ["React.js", "JavaScript", "Bootstrap"],
        description: "Real-time cryptocurrency price updates.",
        features: [
          "Real-time crypto prices",
          "Modern UI design",
          "Search and filter functionality"
        ]
      }
    ],
    
    education: [
      {
        degree: "BE in Computer Engineering",
        institution: "Sandip Institute of Engineering Management",
        period: "2020 - 2023",
        location: "Nashik, India",
        grade: "CGPA: 8.42/10"
      },
      {
        degree: "Diploma in Computer Engineering",
        institution: "Sandip Polytechnic",
        period: "2018 - 2020",
        location: "Nashik, India",
        grade: "86.63%"
      },
      {
        degree: "HSC Science",
        institution: "Bytco High School",
        period: "2016 - 2018",
        location: "Nashik, India",
        grade: ""
      }
    ],

    certificates: [
      "Master Diploma in Java Full Stack Development",
      "Front-End Web Development Course (Udemy)"
    ]
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl">
                  GT
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950 animate-pulse" />
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Gautami Talkhe
                </div>
                <div className="text-xs text-gray-400">Frontend Developer</div>
              </div>
            </div>

            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition">Home</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
              <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
            </div>

            <button className="md:hidden p-2 rounded-lg bg-slate-900/50 backdrop-blur border border-cyan-500/20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20">
            <div className="px-6 py-4 space-y-2">
              <a href="#home" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">Home</a>
              <a href="#about" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">About</a>
              <a href="#experience" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">Experience</a>
              <a href="#projects" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">Projects</a>
              <a href="#skills" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">Skills</a>
              <a href="#contact" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-slate-900/50 backdrop-blur px-6 py-3 rounded-full border border-cyan-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Available for work</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">{portfolioData.title}</p>

          <p className="text-xl text-cyan-400 mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            {portfolioData.tagline}
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">{portfolioData.summary}</p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-900/50 backdrop-blur border-2 border-cyan-500/30 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
            <button className="px-8 py-4 bg-slate-900/50 backdrop-blur border-2 border-cyan-500/30 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="#" className="group p-4 bg-slate-900/50 backdrop-blur rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="group p-4 bg-slate-900/50 backdrop-blur rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={'mailto:' + portfolioData.email} className="group p-4 bg-slate-900/50 backdrop-blur rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Frontend Expert</h3>
              <p className="text-gray-400">Specializing in React.js and modern web technologies</p>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Quick Learner</h3>
              <p className="text-gray-400">Passionate about exploring new technologies</p>
            </div>

            <div className="group bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Goal Oriented</h3>
              <p className="text-gray-400">Committed to delivering high-quality solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Work Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="group bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-xl text-purple-400 font-semibold flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5" />
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full text-sm font-semibold text-cyan-400">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                      <Code className="w-7 h-7" />
                    </div>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 cursor-pointer transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-400 flex gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-sm font-medium text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm font-medium text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Education</span>
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-400 font-semibold mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      {edu.grade && (
                        <>
                          <span>•</span>
                          <span className="text-cyan-400 font-semibold">{edu.grade}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.certificates.map((cert, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur rounded-2xl p-6 border border-cyan-500/20 flex items-center gap-4">
                  <Award className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">{portfolioData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold">{portfolioData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-semibold">{portfolioData.location}</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-800/50 border border-cyan-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
                <input type="email" placeholder="Your Email" className="w-full bg-slate-800/50 border border-cyan-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
                <textarea placeholder="Your Message" rows="4" className="w-full bg-slate-800/50 border border-cyan-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition"></textarea>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-slate-900/50 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;