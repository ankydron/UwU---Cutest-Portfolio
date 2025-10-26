import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const FloatingElements = ({ isDarkMode }) => {
  const [elements, setElements] = useState([])
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  useEffect(() => {
    const newElements = []
    const particles = ['💖', '🌸', '✨', '⭐', '🦄']
    
    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 10,
        emoji: particles[Math.floor(Math.random() * particles.length)],
        duration: Math.random() * 6 + 8,
        delay: Math.random() * 3,
        parallaxSpeed: Math.random() * 0.3 + 0.1
      })
    }
    setElements(newElements)
  }, [])

  const colorIndex = Math.floor((scrollY / 800) % 3)
  const colorClass = ['hue-rotate-0', 'hue-rotate-120', 'hue-rotate-240'][colorIndex]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute opacity-25 will-change-transform ${colorClass}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            transform: `translate3d(0, ${scrollY * element.parallaxSpeed * -0.5}px, 0)`
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
            delay: element.delay
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
      
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-kawaii-pink rounded-full opacity-30 will-change-transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements