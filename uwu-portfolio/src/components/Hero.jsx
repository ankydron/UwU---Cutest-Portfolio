import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

const Hero = ({ isDarkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-kawaii-pink to-kawaii-lavender rounded-none flex items-center justify-center shadow-2xl overflow-hidden" style={{ border: '4px solid #1A1A1A', boxShadow: '8px 8px 0px #3D3663' }}>
            <img 
              src="/profile-pixel.jpg" 
              alt="ANKUR" 
              className="w-full h-full object-cover pixelated"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`font-kawaii text-6xl md:text-8xl mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Hii 👋 I'm ANKUR 💫
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`font-cute text-xl md:text-2xl mb-8 ${
            isDarkMode ? 'text-purple-200' : 'text-gray-700'
          }`}
        >
          I code, create & craft cute things on the web 💖
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="kawaii-button flex items-center gap-2">
            <Sparkles size={20} />
            See My Projects 🍰
          </button>
          <button className="kawaii-button flex items-center gap-2">
            <Heart size={20} />
            Say Hii 💌
          </button>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 text-4xl"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-32 right-20 text-3xl"
      >
        🌸
      </motion.div>
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-20 text-2xl"
      >
        🧋
      </motion.div>
    </section>
  )
}

export default Hero