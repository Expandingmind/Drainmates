'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale' | 'blur'
  delay?: number
  duration?: number
  threshold?: number
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${delay}ms`,
    }

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(40px)' }
        case 'fade-in':
          return { ...baseStyles, opacity: 0 }
        case 'fade-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-40px)' }
        case 'fade-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(40px)' }
        case 'scale':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.9)' }
        case 'blur':
          return { ...baseStyles, opacity: 0, filter: 'blur(10px)' }
        default:
          return baseStyles
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
      filter: 'blur(0)',
    }
  }

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  )
}



