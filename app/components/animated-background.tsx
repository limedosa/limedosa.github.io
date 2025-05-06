"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      dirX: number
      dirY: number
      size: number
      color: string
      update: () => void
      draw: () => void
    }> = []

    const particleCount = 100
    const connectionDistance = 100
    const isDark = theme === "dark"

    // Set canvas dimensions
    const handleResize = () => {
      if (!canvas) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Clear existing particles before creating new ones
      particles = []

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        createParticle()
      }
    }

    // Create a single particle
    const createParticle = () => {
      if (!canvas || !ctx) return

      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const dirX = (Math.random() - 0.5) * 0.7
      const dirY = (Math.random() - 0.5) * 0.7
      const size = Math.random() * 3 + 1
      const color = isDark
        ? `rgba(${59 + Math.random() * 30}, ${130 + Math.random() * 30}, ${246 + Math.random() * 10}, ${0.3 + Math.random() * 0.2})`
        : `rgba(${59 + Math.random() * 30}, ${130 + Math.random() * 30}, ${246 + Math.random() * 10}, ${0.1 + Math.random() * 0.1})`

      particles.push({
        x,
        y,
        dirX,
        dirY,
        size,
        color,
        update: function () {
          if (this.x > canvas.width || this.x < 0) {
            this.dirX = -this.dirX
          }
          if (this.y > canvas.height || this.y < 0) {
            this.dirY = -this.dirY
          }

          this.x += this.dirX
          this.y += this.dirY
        },
        draw: function () {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
        },
      })
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = isDark ? `rgba(59, 130, 246, ${opacity * 0.2})` : `rgba(59, 130, 246, ${opacity * 0.1})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial setup

    // Only start animation when component is mounted
    if (mounted) {
      animate()
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, mounted])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-screen -z-10" aria-hidden="true" />
}
