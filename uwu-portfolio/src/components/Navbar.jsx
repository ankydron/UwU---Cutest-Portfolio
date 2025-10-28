import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 p-4 bg-white/90 backdrop-blur-sm border-b border-white/20 shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`font-kawaii text-2xl ${
            isDarkMode ? 'text-gray-800' : 'text-gray-800'
          }`}
        >
          💖 ANKUR
        </motion.div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 font-cute font-medium">
            <a href="#about" className="hover:text-kawaii-pink transition-colors">About</a>
            <a href="#projects" className="hover:text-kawaii-pink transition-colors">Projects</a>
            <a href="#contact" className="hover:text-kawaii-pink transition-colors">Contact</a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
          >
            {isDarkMode ? <Sun className="text-yellow-300" size={20} /> : <Moon className="text-purple-600" size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar