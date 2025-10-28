import { motion } from 'framer-motion'
import { Code, Palette, Zap, Globe, Lightbulb, Rocket } from 'lucide-react'

const About = ({ isDarkMode }) => {
  const whatIDo = [
    { icon: <Code size={24} />, text: "Frontend & UI/UX Development", detail: "React, Tailwind, Framer Motion" },
    { icon: <Zap size={24} />, text: "AI & Automation Projects", detail: "Python, OpenAI, APIs" },
    { icon: <Palette size={24} />, text: "Design Systems & Brand Identity", detail: "Figma, Adobe XD" },
    { icon: <Globe size={24} />, text: "E-commerce & SaaS Platforms", detail: "Full-stack solutions" },
    { icon: <Lightbulb size={24} />, text: "Creative Coding Experiments", detail: "Prototypes & Innovation" },
    { icon: <Rocket size={24} />, text: "Product Development", detail: "Beautiful, functional, scalable" }
  ]

  const skills = {
    "Frontend": [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Framer Motion", icon: "🎭" }
    ],
    "Backend": [
      { name: "Python", icon: "🐍" },
      { name: "Node.js", icon: "🟢" },
      { name: "Django", icon: "🎸" },
      { name: "FastAPI", icon: "⚡" },
      { name: ".NET", icon: "🔷" },
      { name: "SQLite", icon: "🗃️" }
    ],
    "Design": [
      { name: "Figma", icon: "🎨" },
      { name: "Adobe XD", icon: "🎭" },
      { name: "Photoshop", icon: "🖼️" },
      { name: "Canva", icon: "✨" },
      { name: "UI/UX Design", icon: "📱" }
    ],
    "Tools & Cloud": [
      { name: "Git", icon: "🌿" },
      { name: "Docker", icon: "🐳" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
      { name: "Netlify", icon: "🌐" },
      { name: "NPM", icon: "📦" }
    ]
  }

  return (
    <>
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-kawaii text-5xl text-center mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="kawaii-card mb-12 text-center"
          >
            <p className="font-cute text-xl leading-relaxed text-gray-700 mb-6">
              👋 Hey there! I'm Ankur — a <span className="text-kawaii-pink font-semibold">Creative Technologist, Designer & Developer</span>.
            </p>
            <p className="font-cute text-lg text-gray-600 mb-6">
              🚀 I bring ideas to life with clean code, bold design, and a sharp product sense. Whether it's building smart user interfaces, crafting seamless user experiences, or solving real-world problems with elegant solutions — I love what I do.
            </p>
            <p className="font-cute text-lg text-gray-600">
              🌍 I'm passionate about products that are <span className="text-kawaii-pink">beautiful, functional, and scalable</span>. Every line of code I write is backed by a vision — to improve lives, automate effort, or spark curiosity.
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-kawaii text-3xl text-center mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            What I Do
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatIDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="kawaii-card text-center"
              >
                <div className="text-kawaii-pink mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className={`font-kawaii text-lg mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>{item.text}</h4>
                <p className={`font-cute text-sm ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-600'
                }`}>{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 bg-gradient-to-r from-kawaii-pink/10 to-kawaii-lavender/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-kawaii text-5xl text-center mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="kawaii-card card-3d"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left - rect.width / 2
                  const y = e.clientY - rect.top - rect.height / 2
                  e.currentTarget.style.transform = `perspective(800px) rotateY(${x / 15}deg) rotateX(${-y / 15}deg) scale(1.02)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'
                }}
              >
                <h3 className={`font-kawaii text-xl mb-4 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-2 rounded-full text-sm font-cute cursor-default flex items-center gap-1 ${
                        isDarkMode 
                          ? 'bg-white/20 text-white border border-white/30' 
                          : 'bg-kawaii-pink/30 text-gray-800 border border-kawaii-pink/40'
                      }`}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About