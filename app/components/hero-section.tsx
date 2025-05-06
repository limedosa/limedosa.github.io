"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedBackground from "./animated-background"
import Typewriter from "./typewriter"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      <motion.div
        className="container px-4 md:px-6 z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-primary/20 glow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image src="/images/profile.png" alt="Linda Dominguez" fill className="object-cover" priority />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 animated-gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter text={["Linda Dominguez", "AI Engineer", "Data Scientist", "Full Stack Developer"]} delay={80} />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building intelligent solutions at the intersection of AI and software engineering
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="#about">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
          </Link>
          <Link href="/resume">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
            >
              View Resume
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link href="https://github.com/limedosa" target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10 border-primary/50"
            >
              <Github className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/linda-dominguez/" target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10 border-primary/50"
            >
              <Linkedin className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:dlinda@mit.edu">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-primary/10 border-primary/50"
            >
              <Mail className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </div>
  )
}
