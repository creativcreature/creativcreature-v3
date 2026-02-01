import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorOutline = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e

      if (cursorDot.current) {
        cursorDot.current.style.left = `${clientX}px`
        cursorDot.current.style.top = `${clientY}px`
      }

      if (cursorOutline.current) {
        cursorOutline.current.style.left = `${clientX}px`
        cursorOutline.current.style.top = `${clientY}px`
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', moveCursor)

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        ref={cursorDot}
        className="cursor-dot"
        initial={{ scale: 0 }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.15 }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <motion.div
        ref={cursorOutline}
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default CustomCursor
