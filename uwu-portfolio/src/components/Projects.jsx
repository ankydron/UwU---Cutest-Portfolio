import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Interactive Whiteboard 📝",
      description: "A collaborative digital whiteboard for drawing and note-taking",
      tech: ["JavaScript", "Canvas API", "HTML5"],
      image: "🎨",
      thumbnail: "/whiteboard-thumb.svg",
      demo: "#",
      github: "https://github.com/susbro2/whiteboard"
    },
    {
      title: "Voxen.ai 🤖",
      description: "AI-powered voice assistant with advanced natural language processing",
      tech: ["Python", "AI/ML", "NLP"],
      image: "🎙️",
      thumbnail: "/voxen-thumb.svg",
      demo: "https://voxenai.vercel.app/",
      github: "https://github.com/susbro2/voxen.ai"
    },
    {
      title: "FreeYT 🎥",
      description: "Free YouTube video downloader with clean interface and fast downloads",
      tech: ["Python", "Flask", "YouTube API"],
      image: "📺",
      thumbnail: "/freeyt-thumb.svg",
      demo: "#",
      github: "https://github.com/susbro2/freeyt"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-kawaii text-5xl text-center mb-12 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="kawaii-card group card-3d"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x / 10}deg) rotateX(${-y / 10}deg) translateZ(20px)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
              }}
            >
              <div className="mb-4 text-center">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-2xl mb-2"
                />
                <div className="text-2xl">{project.image}</div>
              </div>
              
              <h3 className={`font-kawaii text-xl mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{project.title}</h3>
              
              <p className={`font-cute mb-4 text-sm leading-relaxed ${
                isDarkMode ? 'text-gray-200' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-cute ${
                      isDarkMode 
                        ? 'bg-white/20 text-white' 
                        : 'bg-kawaii-pink/20 text-kawaii-pink'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 pixel-button text-center font-cute text-sm flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-600 text-white border-3 border-black rounded-none font-cute text-sm flex items-center justify-center gap-2 hover:bg-gray-700 transition-none"
                  style={{ border: '3px solid #1A1A1A', boxShadow: '4px 4px 0px #3D3663' }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="kawaii-button flex items-center gap-2 mx-auto"
          >
            <Sparkles size={20} />
            View More Projects 🍰
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects