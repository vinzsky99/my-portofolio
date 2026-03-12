import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, ExternalLink, Award, GraduationCap, Briefcase, Code, Sparkles, Sliders, Moon, Sun } from 'lucide-react';
import { portfolioData, coverImages } from './constants';

export default function App() {
  const [opacity, setOpacity] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoverIndex((prev) => (prev + 1) % coverImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bgOpacity = opacity / 100;

  return (
    <div className={`${isDarkMode ? 'dark bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'} min-h-screen transition-colors duration-300`}>
      
      {/* Top Floating Navbar & Controls */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between gap-4 p-2 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl"
        >
          {/* Social Links */}
          <div className="flex items-center gap-1">
            <a href={`mailto:${portfolioData.email}`} className="p-2.5 hover:bg-white/10 rounded-2xl transition-colors text-emerald-500" title="Email">
              <Mail size={20} />
            </a>
            <a href={`tel:${portfolioData.phone}`} className="p-2.5 hover:bg-white/10 rounded-2xl transition-colors text-blue-500" title="Phone">
              <Phone size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-white/10 rounded-2xl transition-colors text-[#0077b5]" title="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Theme & Transparency Controls Integrated */}
          <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <Sliders size={14} className="text-neutral-400" />
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={opacity} 
                onChange={(e) => setOpacity(parseInt(e.target.value))}
                className="w-20 md:w-28 accent-emerald-500 cursor-pointer"
              />
              <span className="text-[10px] font-mono w-8 text-neutral-400">{opacity}%</span>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-400" />}
            </button>
          </div>
        </motion.div>
      </div>

      <div style={{ opacity: bgOpacity }} className="transition-opacity duration-200">
        {/* Hero Section with Cover Photo */}
        <section className={`relative overflow-hidden ${isDarkMode ? 'bg-neutral-900/50' : 'bg-white'} border-b border-neutral-200 dark:border-neutral-800`}>
          {/* Animated Cover Photo */}
          <div className="h-64 md:h-80 w-full relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentCoverIndex}
                src={coverImages[currentCoverIndex]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 dark:to-neutral-950/80" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative -mt-24 md:-mt-32 pb-16">
            <div className="flex flex-col md:flex-row items-end gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative shrink-0"
              >
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-8 border-white dark:border-neutral-950 shadow-2xl bg-neutral-200 dark:bg-neutral-800">
                  <img 
                    src={portfolioData.profileImage} 
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <div className="flex-1 pb-4 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight mb-2 drop-shadow-md"
                >
                  {portfolioData.name}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-2xl text-emerald-500 font-medium mb-4"
                >
                  {portfolioData.title}
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-3xl">
                {portfolioData.bio}
              </p>
            </motion.div>
          </div>
        </section>

        <main className="max-w-5xl mx-auto py-16 px-6 space-y-24 pb-32">
          {/* Skills Section */}
          <section id="skills">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                <Code size={24} />
              </div>
              <h2 className="text-3xl font-bold">Core Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-400">{skill.name}</span>
                    <span className="text-sm text-neutral-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {portfolioData.experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 pb-8 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-neutral-950 shadow-sm" />
                  <div className={`${isDarkMode ? 'bg-neutral-900/50' : 'bg-white'} p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-md transition-shadow`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-blue-500 font-medium">{exp.company}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`${isDarkMode ? 'bg-neutral-900/50' : 'bg-white'} p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 flex items-start gap-6`}>
                  <div className="hidden sm:flex w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">{edu.institution}</p>
                    <p className="text-sm text-neutral-400 mt-1">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section id="awards">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                <Award size={24} />
              </div>
              <h2 className="text-3xl font-bold">Certificates & Awards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.awards.map((award, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`${isDarkMode ? 'bg-neutral-900/50' : 'bg-white'} rounded-2xl overflow-hidden shadow-sm border border-neutral-100 dark:border-neutral-800 group`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={award.imageUrl} 
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{award.title}</h3>
                      <ExternalLink size={16} className="text-neutral-400" />
                    </div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">{award.issuer}</p>
                    <p className="text-neutral-400 text-xs">{award.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={`border-t border-neutral-200 dark:border-neutral-800 py-12 px-6 ${isDarkMode ? 'bg-neutral-950' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-neutral-500 text-sm">
              © 2026 Moh. Bashory. Dibuat dengan React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

